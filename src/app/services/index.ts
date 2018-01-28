import { BeltService } from './belt.service';
import { CapabilityService } from './capability.service';
import { ExamService } from './exam.service';
import { LocationService } from './location.service';
import { RoleService } from './role.service';
import { StudentService } from './student.service';
import { SubmissionFileService } from './submission-file.service';
import { SubmissionService } from './submission.service';
import { UserService } from './user.service';

export * from './belt.service';
export * from './capability.service';
export * from './exam.service';
export * from './location.service';
export * from './role.service';
export * from './student.service';
export * from './submission-file.service';
export * from './submission.service';
export * from './user.service';

export const services = [
  BeltService,
  CapabilityService,
  ExamService,
  LocationService,
  RoleService,
  StudentService,
  SubmissionFileService,
  SubmissionService,
  UserService,
];
