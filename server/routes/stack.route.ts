import { stackController } from '../controllers';
import { wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(stackController.index))
  .get('/:stack_id', wrapper(stackController.show))
  .post('/', wrapper(stackController.create))
  .put('/:stack_id', wrapper(stackController.update))
  .delete('/:stack_id', wrapper(stackController.destroy));
