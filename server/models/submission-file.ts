import { model, Schema, Document } from 'mongoose';
import { SubmissionModel } from './submission';

const submissionFileSchema = new Schema({
  extension: {
    trim: true,
    type: String,
  },
  filename: {
    required: true,
    trim: true,
    type: String,
  },
  contents: {
    default: '',
    required: true,
    type: String,
  },
  path: {
    required: true,
    trim: true,
    type: String,
  },
  submission: {
    ref: 'Submission',
    required: true,
    type: Schema.Types.ObjectId,
  },
  size: {
    required: true,
    type: Number
  },
},
{
  timestamps: true,
});

export interface SubmissionFileModel extends Document, ISubmissionFile {
  createdAt: Date;
  updatedAt: Date;
}

export interface ISubmissionFile {
  extension: string;
  contents: string;
  filename: string;
  path: string;
  submission: SubmissionModel;
  size: number;
}

export const SubmissionFile = model<SubmissionFileModel>('File', submissionFileSchema);
