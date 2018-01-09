import { model, Schema, Document } from 'mongoose';
import { SubmissionModel } from './submission';

const fileSchema = new Schema({
  extension: {
    trim: true,
    type: String,
  },
  file: {
    required: true,
    trim: true,
    type: String,
  },
  name: {
    required: true,
    trim: true,
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
},
{
  timestamps: true,
});

export interface FileModel extends Document, IFile {
  createdAt: Date;
  updatedAt: Date;
}

export interface IFile {
  extension: string;
  file: string;
  name: string;
  path: string;
  submission: SubmissionModel;
}

export const File = model<FileModel>('File', fileSchema);
