import { userController } from '../controllers';
import { wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(userController.index))
  .get('/:user_id', wrapper(userController.show))
  .post('/', wrapper(userController.create))
  .put('/:user_id', wrapper(userController.update))
  .delete('/:user_id', wrapper(userController.destroy));
