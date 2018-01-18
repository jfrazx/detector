import { submissionController } from '../controllers';
import { upload, wrapper } from './middleware';
import { router as fingerprintRouter } from './fingerprint.route';
import { Router } from 'express';

export const router = Router({ mergeParams: true });

router
  .get('/', wrapper(submissionController.index))
  .get('/:submission_id', wrapper(submissionController.show))
  .post('/', wrapper(submissionController.create))
  .post('', upload.array('archives', 10), wrapper(submissionController.createFromFile))
  .put('/:submission_id', wrapper(submissionController.update))
  .delete('/:submission_id', wrapper(submissionController.destroy))
  .use('/fingerprints', fingerprintRouter);
