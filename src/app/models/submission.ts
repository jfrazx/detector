import { Exam } from './exam';
import { File } from './file';
import { Student } from './student';
import { User } from './user';

export class Submission {
  exam: Exam;
  files: Array<File>;
  student: Student;
  instructor: User;
  source: {
    link: string,
    path: string,
  };
  takenOn: Date;
  createdAt: Date;
  updatedAt: Date;
}
