import { wrapper } from './concerns/async-wrapper';
import { stackController } from '../controllers';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(stackController.index))
  .get('/:id', wrapper(stackController.show))
  .post('/', wrapper(stackController.create))
  .put('/:id', wrapper(stackController.update))
  .delete('/:id', wrapper(stackController.destroy));
