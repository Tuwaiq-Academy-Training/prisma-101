import { NextFunction, Request, Response } from 'express';
import {
  ContactSchemaType,
  updateContactSchemaType,
} from '../zod_schema/contact.schema';

let contact: ContactSchemaType['body'][] = [];

export const getContractHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json(contact);
};

export const addContractHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newContact = req.body as ContactSchemaType['body'];
  contact.push(newContact);
  return res.status(201).json({ message: 'New contact added !' });
};

export const updateContractHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newContact = req.body as updateContactSchemaType['body'];
  const { id } = req.params as updateContactSchemaType['params'];
  const updatedContact = contact.filter((c) => {
    return c.id !== id;
  });
  updatedContact.push(newContact);
  contact = updatedContact;
  return res.status(201).json({ message: 'New contact added !' });
};
