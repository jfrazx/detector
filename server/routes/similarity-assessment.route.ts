import { similarityAssessmentController } from '../controllers';
import { wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(similarityAssessmentController.index))
  .get('/:id', wrapper(similarityAssessmentController.show))
  .post('/', wrapper(similarityAssessmentController.create))
  .put('/:id', wrapper(similarityAssessmentController.update))
  .delete('/:id', wrapper(similarityAssessmentController.destroy));
