import { wrapper } from './concerns/async-wrapper';
import { fileController } from '../controllers';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(fileController.index))
  .get('/:id', wrapper(fileController.show))
  .post('/', wrapper(fileController.create))
  .put('/:id', wrapper(fileController.update))
  .delete('/:id', wrapper(fileController.destroy));
