import { wrapper } from './concerns/async-wrapper';
import { locationController } from '../controllers';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(locationController.index))
  .get('/:id', wrapper(locationController.show))
  .post('/', wrapper(locationController.create))
  .put('/:id', wrapper(locationController.update))
  .delete('/:id', wrapper(locationController.destroy));
