import { examController } from '../controllers';
import { wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(examController.index))
  .get('/:exam_id', wrapper(examController.show))
  .post('/', wrapper(examController.create))
  .put('/:exam_id', wrapper(examController.update))
  .delete('/:exam_id', wrapper(examController.destroy));
