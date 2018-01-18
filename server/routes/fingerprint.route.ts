import { fingerPrintController } from '../controllers';
import { wrapper } from './middleware';
import { Router } from 'express';

export const router = Router();

router
  .get('/', wrapper(fingerPrintController.index))
  .get('/:fingerprint_id', wrapper(fingerPrintController.show))
  .post('/', wrapper(fingerPrintController.create))
  .put('/:fingerprint_id', wrapper(fingerPrintController.update))
  .delete('/:fingerprint_id', wrapper(fingerPrintController.destroy));
