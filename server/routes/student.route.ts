import { wrapper } from './concerns/async-wrapper';
import { studentController } from '../controllers';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(studentController.index))
  .get('/:id', wrapper(studentController.show))
  .post('/', wrapper(studentController.create))
  .put('/:id', wrapper(studentController.update))
  .delete('/:id', wrapper(studentController.destroy));
