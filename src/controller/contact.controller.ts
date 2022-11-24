import { contact } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import {
  ContactSchemaType,
  GetOneContactSchemaType,
} from '../zod_schema/contact.schema';

export const getContractHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const contacts = await prisma.contact.findMany();
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server Error !' });
  }
};
export const getOneContractHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.query as GetOneContactSchemaType;
    const contact = await prisma.contact.findUnique({
      where: { id },
    });

    return res.status(200).json(contact);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server Error !' });
  }
};

export const addContractHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newContact = req.body as contact;

    await prisma.contact.create({
      data: newContact,
    });
    return res.status(201).json({ message: 'New contact added !' });
  } catch (error) {
    const prismaError = error as PrismaClientKnownRequestError;
    if (prismaError.code == 'P2002') {
      return res.status(400).json({
        message: 'You phone number have been used before',
      });
    }
    return res.status(500).json({
      message: 'Server Error !',
    });
  }
};

export const updateContractHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newContact = req.body as contact;
    const { id } = req.params as ContactSchemaType;

    await prisma.contact.update({
      where: { id },
      data: newContact,
    });
    return res.status(200).json({ message: 'Contact updated' });
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error !',
    });
  }
};

export const deleteContactHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params as ContactSchemaType;

    await prisma.contact.delete({
      where: { id },
    });
    return res.status(200).json({ message: 'Contact Deleted !' });
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error !',
    });
  }
};
