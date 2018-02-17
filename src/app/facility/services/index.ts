import { LocationService } from './location.service';
import { StudentService } from './student.service';
import { UserService } from './user.service';

export const services: any[] = [LocationService, StudentService, UserService];

export * from './exam.service';
export * from './location.service';
export * from './student.service';
export * from './user.service';
