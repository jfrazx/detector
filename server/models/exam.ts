import { model, Schema, Document } from 'mongoose';
import { StackModel } from './stack';

const examSchema = new Schema({
  active: {
    default: true,
    index: true,
    required: true,
    type: Boolean,
  },
  name: {
    required: [true, 'Exam name is required'],
    index: true,
    trim: true,
    type: String,
    unique: true,
  },
  option: {
    required: [true, 'Which exam option is this?'],
    trim: true,
    type: String,
  },
  stack: {
    ref: 'Stack',
    required: [true, 'To which stack does this exam belong?'],
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

examSchema.set('toObject', { getters: true });

export const Exam = model<ExamModel>('Exam', examSchema);
