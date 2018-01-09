import { wrapper } from './concerns/async-wrapper';
import { examController } from '../controllers';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(examController.index))
  .get('/:id', wrapper(examController.show))
  .post('/', wrapper(examController.create))
  .put('/:id', wrapper(examController.update))
  .delete('/:id', wrapper(examController.destroy));
