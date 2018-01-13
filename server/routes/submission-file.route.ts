import { submissionFileController } from '../controllers';
import { wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(submissionFileController.index))
  .get('/:id', wrapper(submissionFileController.show))
  .post('/', wrapper(submissionFileController.create))
  .put('/:id', wrapper(submissionFileController.update))
  .delete('/:id', wrapper(submissionFileController.destroy));
