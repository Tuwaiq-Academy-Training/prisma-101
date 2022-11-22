import express from 'express';
import {
  addContractHandler,
  getContractHandler,
  updateContractHandler,
} from '../controller/contact.controller';
import validate from '../middlewares/validate';
import {
  addContactSchema,
  ContactSchemaType,
  updateContactSchema,
  updateContactSchemaType,
} from '../zod_schema/contact.schema';

const router = express.Router();

router.get('/', getContractHandler);

router.post('/', validate(addContactSchema), addContractHandler);
router.put('/:id', validate(updateContactSchema), updateContractHandler);

export default router;
