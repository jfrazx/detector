import { submissionController } from '../controllers';
import { upload, wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(submissionController.index))
  .get('/:id', wrapper(submissionController.show))
  .post('/', wrapper(submissionController.create))
  .post('', upload.array('archives', 10), wrapper(submissionController.createFromFile))
  .put('/:id', wrapper(submissionController.update))
  .delete('/:id', wrapper(submissionController.destroy));
