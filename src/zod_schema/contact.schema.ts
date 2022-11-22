import { z } from 'zod';

export const addContactSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'ID is required !' }),
    name: z
      .string({ required_error: 'name is required !' })
      .min(3, 'Name must be more than 2 char'),
    phone: z
      .string({
        required_error: 'phone number is required ',
        invalid_type_error: 'Phone number must be a string',
      })
      .min(10, 'You phone number must be at 10 number')
      .max(10, 'You phone number must be at 10 number'),
  }),
});

export const updateContactSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'ID is required !' }),
    name: z
      .string({ required_error: 'name is required !' })
      .min(3, 'Name must be more than 2 char'),
    phone: z
      .string({
        required_error: 'phone number is required ',
        invalid_type_error: 'Phone number must be a string',
      })
      .min(10, 'You phone number must be at 10 number')
      .max(10, 'You phone number must be at 10 number'),
  }),
  params: z.object({
    id: z.string({ required_error: 'Please send id in the params' }),
  }),
});

export type ContactSchemaType = z.infer<typeof addContactSchema>;

export type updateContactSchemaType = z.infer<typeof updateContactSchema>;
