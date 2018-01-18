import { similarityAssessmentController } from '../controllers';
import { wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(similarityAssessmentController.index))
  .get('/:similarity_id', wrapper(similarityAssessmentController.show))
  .post('/', wrapper(similarityAssessmentController.create))
  .put('/:similarity_id', wrapper(similarityAssessmentController.update))
  .delete('/:similarity_id', wrapper(similarityAssessmentController.destroy));
