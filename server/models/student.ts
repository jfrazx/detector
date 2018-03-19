import { model, Schema, Document } from 'mongoose';
import { SubmissionModel } from './submission';
import { LocationModel } from './location';
import { StackModel } from './stack';
import { isEmail } from 'validator';
import { ExamModel } from './exam';

const studentSchema = new Schema({
  location: {
    ref: 'Location',
    required: true,
    type: Schema.Types.ObjectId,
  },
  first_name: {
    index: true,
    required: true,
    trim: true,
    type: String,
  },
  last_name: {
    index: true,
    required: true,
    trim: true,
    type: String,
  },
  email: {
    trim: true,
    type: String,
    unique: true,
    validate: {
      validator(value) {
        return isEmail(value);
      },
    },
  },
  submissions: [
    {
      ref: 'Submission',
      type: Schema.Types.ObjectId,
    },
  ],
  stacks: [
    {
      ref: 'Stack',
      type: Schema.Types.ObjectId,
    },
  ],
  exams: [
    {
      ref: 'Exam',
      type: Schema.Types.ObjectId,
    },
  ],
});

export interface StudentModel extends Document {
  location: LocationModel;
  first_name: string;
  last_name: string;
  submissions: Array<SubmissionModel>;
  stacks: Array<StackModel>;
  exams: Array<ExamModel>;
}

studentSchema.set('toObject', { getters: true });

export const Student = model<StudentModel>('Student', studentSchema);
