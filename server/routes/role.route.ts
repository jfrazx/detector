import { roleController } from '../controllers';
import { wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(roleController.index))
  .get('/:role_id', wrapper(roleController.show))
  .post('/', wrapper(roleController.create))
  .put('/:role_id', wrapper(roleController.update))
  .delete('/:role_id', wrapper(roleController.destroy));
