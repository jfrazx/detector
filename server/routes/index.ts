import { Router } from 'express';

import { validationHandler } from './middleware/validation';
import { errorHandler, basicErrorHandler } from './middleware/errorHandler';

import { router as authRouter } from './auth.route';
import { router as beltRouter } from './belt.route';
import { router as capabilityRouter } from './capability.route';
import { router as examRouter } from './exam.route';
import { router as fileRouter } from './file.route';
import { router as locationRouter } from './location.route';
import { router as roleRouter } from './role.route';
import { router as stackRouter } from './stack.route';
import { router as studentRouter } from './student.route';
import { router as submissionRouter } from './submission.route';
import { router as userRouter } from './user.route';

export const routes = Router();

routes
  .use(authRouter)
  .use(beltRouter)
  .use(capabilityRouter)
  .use(examRouter)
  .use(fileRouter)
  .use(locationRouter)
  .use(roleRouter)
  .use(stackRouter)
  .use(studentRouter)
  .use(submissionRouter)
  .use(userRouter);

// Error Handling Middleware ....
routes
  .use(validationHandler)
  .use(errorHandler)
  .use(basicErrorHandler);
