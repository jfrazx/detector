import { SubmissionFileModel } from './submission-file';
import { model, Schema, Document } from 'mongoose';
import { SubmissionModel } from './submission';

const fingerPrintSchema = new Schema(
  {
    filename: {
      index: true,
      required: true,
      trim: true,
      type: String,
    },
    file: {
      ref: 'SubmissionFile',
      required: true,
      type: Schema.Types.ObjectId,
    },
    method: {
      index: true,
      type: String,
      required: true,
    },
    contents: {
      required: true,
      type: String,
    },
    submission: {
      ref: 'Submission',
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

export interface FingerPrintModel extends Document, IFingerPrint {
  createdAt: Date;
  updatedAt: Date;
}

export interface IFingerPrint {
  submission: SubmissionModel;
  file: SubmissionFileModel;
  filename: string;
  method: string;
  contents: string;
}

export const FingerPrint = model<FingerPrintModel>(
  'FingerPrint',
  fingerPrintSchema
);
