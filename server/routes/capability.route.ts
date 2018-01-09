import { wrapper } from './concerns/async-wrapper';
import { capabilityController } from '../controllers';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(capabilityController.index))
  .get('/:id', wrapper(capabilityController.show))
  .post('/', wrapper(capabilityController.create))
  .put('/:id', wrapper(capabilityController.update))
  .delete('/:id', wrapper(capabilityController.destroy));
