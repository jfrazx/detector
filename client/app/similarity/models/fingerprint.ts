import { Submission, SubmissionFile } from '../../submission';

export interface FingerPrint {
  _id: string;
  file: SubmissionFile;
  filename: string;
  method: string;
  contents: string;
  submission: Submission;
  createdAt: Date;
  updatedAt: Date;
}
