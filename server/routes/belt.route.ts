import { wrapper } from './middleware';
import { beltController } from '../controllers';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(beltController.index))
  .get('/:belt_id', wrapper(beltController.show))
  .post('/', wrapper(beltController.create))
  .put('/:belt_id', wrapper(beltController.update))
  .delete('/:belt_id', wrapper(beltController.destroy));
