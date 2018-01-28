import { Router } from 'express';

import {
  basicErrorHandler,
  errorHandler,
  errorLogger,
  validationHandler,
} from './middleware';

import { router as authRouter } from './auth.route';
import { router as beltRouter } from './belt.route';
import { router as capabilityRouter } from './capability.route';
import { router as examRouter } from './exam.route';
import { router as locationRouter } from './location.route';
import { router as roleRouter } from './role.route';
import { router as simliarityAssessmentRouter } from './similarity-assessment.route';
import { router as stackRouter } from './stack.route';
import { router as studentRouter } from './student.route';
import { router as submissionFileRouter } from './submission-file.route';
import { router as submissionRouter } from './submission.route';
import { router as userRouter } from './user.route';

export * from './catch-all.route';

export const routes = Router();

routes
  .use('/auth', authRouter)
  .use('/belts', beltRouter)
  .use('/capabilities', capabilityRouter)
  .use('/exams', examRouter)
  .use('/locations', locationRouter)
  .use('/roles', roleRouter)
  .use('/similarity_assessments', simliarityAssessmentRouter)
  .use('/stacks', stackRouter)
  .use('/students', studentRouter)
  .use('/submission_files', submissionFileRouter)
  .use('/submissions', submissionRouter)
  .use('/users', userRouter)

  // Error Handling Middleware ....
  .use(errorLogger)
  .use(validationHandler)
  .use(errorHandler)
  .use(basicErrorHandler);
