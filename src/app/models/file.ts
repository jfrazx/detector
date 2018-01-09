import { Submission } from './submission';

export class File {
  extension: string;
  name: string;
  path: string;
  submission: Submission;
  createdAt: Date;
  updatedAt: Date;
}
