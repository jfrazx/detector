import { wrapper } from './middleware';
import { beltController } from '../controllers';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(beltController.index))
  .get('/:id', wrapper(beltController.show))
  .post('/', wrapper(beltController.create))
  .put('/:id', wrapper(beltController.update))
  .delete('/:id', wrapper(beltController.destroy));
