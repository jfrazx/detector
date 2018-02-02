export * from './belt.service';
export * from './stack.service';
export * from './submission.service';
export * from './submission-file.service';

import { BeltService } from './belt.service';
import { StackService } from './stack.service';
import { SubmissionService } from './submission.service';
import { SubmissionFileService } from './submission-file.service';

export const services: any[] = [
  BeltService,
  StackService,
  SubmissionService,
  SubmissionFileService,
];
