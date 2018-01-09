import { wrapper } from './concerns/async-wrapper';
import { submissionController } from '../controllers';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(submissionController.index))
  .get('/:id', wrapper(submissionController.show))
  .post('/', wrapper(submissionController.create))
  .put('/:id', wrapper(submissionController.update))
  .delete('/:id', wrapper(submissionController.destroy));
