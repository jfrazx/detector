import { model, Schema, Document } from 'mongoose';
import { SubmissionFileModel } from './submission-file';

const fingerPrintSchema = new Schema({
  filename: {
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
    type: String,
    required: true,
  },
  contents: {
    required: true,
    type: String,
  }
}, {
  timestamps: true,
});

export interface FingerPrintModel extends Document {
  file: SubmissionFileModel;
  filename: string;
  method: string;
  contents: string;
  createdAt: Date;
  updatedAt: Date;
}

export const FingerPrint = model<FingerPrintModel>('FingerPrint', fingerPrintSchema);
