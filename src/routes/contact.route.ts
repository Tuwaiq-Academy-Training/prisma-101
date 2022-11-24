import express from 'express';
import {
  addContractHandler,
  deleteContactHandler,
  getContractHandler,
  getOneContractHandler,
  updateContractHandler,
} from '../controller/contact.controller';
import validate from '../middlewares/validate';
import {
  addContactSchema,
  deleteContactSchema,
  getOneContactSchema,
  updateContactSchema,
} from '../zod_schema/contact.schema';

const router = express.Router();

router.get('/', getContractHandler);
router.get('/one', validate(getOneContactSchema), getOneContractHandler);
router.post('/', validate(addContactSchema), addContractHandler);
router.put('/:id', validate(updateContactSchema), updateContractHandler);
router.delete('/:id', validate(deleteContactSchema), deleteContactHandler);

export default router;
