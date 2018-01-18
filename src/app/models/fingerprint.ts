import { SubmissionFile } from './submission-file';

export class FingerPrint {
  _id: string;
  file: SubmissionFile;
  filename: string;
  method: string;
  contents: string;
  createdAt: Date;
  updatedAt: Date;
}
