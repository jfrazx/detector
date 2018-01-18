import { locationController } from '../controllers';
import { wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(locationController.index))
  .get('/:location_id', wrapper(locationController.show))
  .post('/', wrapper(locationController.create))
  .put('/:location_id', wrapper(locationController.update))
  .delete('/:location_id', wrapper(locationController.destroy));
