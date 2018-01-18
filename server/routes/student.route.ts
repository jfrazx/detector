import { studentController } from '../controllers';
import { wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(studentController.index))
  .get('/:student_id', wrapper(studentController.show))
  .post('/', wrapper(studentController.create))
  .put('/:student_id', wrapper(studentController.update))
  .delete('/:student_id', wrapper(studentController.destroy));
