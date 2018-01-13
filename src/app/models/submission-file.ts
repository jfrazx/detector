import { Submission } from './submission';

export class SubmissionFile {
  extension: string;
  contents: string;
  filename: string;
  path: string;
  submission: Submission;
  size: number;
  createdAt: Date;
  updatedAt: Date;
}
