import { wrapper } from './concerns/async-wrapper';
import { userController } from '../controllers';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(userController.index))
  .get('/:id', wrapper(userController.show))
  .post('/', wrapper(userController.create))
  .put('/:id', wrapper(userController.update))
  .delete('/:id', wrapper(userController.destroy));
