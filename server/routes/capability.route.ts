import { wrapper } from './middleware';
import { capabilityController } from '../controllers';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(capabilityController.index))
  .get('/:capability_id', wrapper(capabilityController.show))
  .post('/', wrapper(capabilityController.create))
  .put('/:capability_id', wrapper(capabilityController.update))
  .delete('/:capability_id', wrapper(capabilityController.destroy));
