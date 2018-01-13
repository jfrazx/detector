import { SubmissionFile } from './submission-file';

export class FingerPrint {
  file: SubmissionFile;
  filename: string;
  method: string;
  contents: string;
  createdAt: Date;
  updatedAt: Date;
}
