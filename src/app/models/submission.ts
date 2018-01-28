import { Exam } from './exam';
import { Student } from './student';
import { SubmissionFile } from './submission-file';
import { User } from './user';

export class Submission {
  _id: string;
  exam: Exam;
  files: Array<SubmissionFile>;
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
