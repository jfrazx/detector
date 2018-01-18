import { submissionFileController } from '../controllers';
import { wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(submissionFileController.index))
  .get('/:file_id', wrapper(submissionFileController.show))
  .post('/', wrapper(submissionFileController.create))
  .put('/:file_id', wrapper(submissionFileController.update))
  .delete('/:file_id', wrapper(submissionFileController.destroy));
