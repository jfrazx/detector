import { roleController } from '../controllers';
import { wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(roleController.index))
  .get('/:id', wrapper(roleController.show))
  .post('/', wrapper(roleController.create))
  .put('/:id', wrapper(roleController.update))
  .delete('/:id', wrapper(roleController.destroy));
