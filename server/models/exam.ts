import { model, Schema, Document } from 'mongoose';
import { StackModel } from './stack';

const examSchema = new Schema({
  active: {
    default: true,
    required: true,
    type: Boolean,
  },
  name: {
    required: true,
    trim: true,
    type: String,
    unique: true,
  },
  option: {
    required: true,
    trim: true,
    type: String,
  },
  stack: {
    ref: 'Stack',
    required: true,
    type: Schema.Types.ObjectId,
  },
  wireframe: {
    trim: true,
    type: String,
  },
});

export interface ExamModel extends Document {
  active: boolean;
  name: string;
  option: string;
  stack: StackModel;
  wireframe: string;
}

export const Exam = model<ExamModel>('Exam', examSchema);
