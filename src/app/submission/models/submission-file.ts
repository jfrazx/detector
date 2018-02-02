import { Submission } from './submission';

export class SubmissionFile {
  _id: string;
  extension: string;
  contents: string;
  filename: string;
  path: string;
  submission: Submission;
  size: number;
  createdAt: Date;
  updatedAt: Date;
}
