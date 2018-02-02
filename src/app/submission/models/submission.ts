import { Exam } from './exam';
import { SubmissionFile } from './submission-file';
import { Student, User } from '../../facility';

export class Submission {
  _id: string;
  exam: Exam;
  files: SubmissionFile[];
  student: Student;
  instructor: User;
  source: {
    link: string;
    path: string;
  };
  takenOn: Date;
  createdAt: Date;
  updatedAt: Date;
}
