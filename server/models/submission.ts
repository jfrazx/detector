import { model, Schema, Document } from 'mongoose';
import {
  ExamModel,
  FileModel,
  StackModel,
  StudentModel,
  UserModel
} from './';

const options: any = {
  timestamps: true,
  usePushEach: true,
};

const submissionSchema = new Schema({
  belt: {
    ref: 'Belt',
    type: Schema.Types.ObjectId,
  },
  exam: {
    ref: 'Exam',
    required: true,
    type: Schema.Types.ObjectId,
  },
  files: [
    {
      ref: 'File',
      required: true,
      type: Schema.Types.ObjectId,
    },
  ],
  student: {
    ref: 'Student',
    type: Schema.Types.ObjectId,
  },
  instructor: {
    ref: 'User',
    type: Schema.Types.ObjectId,
  },
  takenOn: {
    default: Date.now,
    required: true,
    type: Date,
  },
  source: {
    link: {
      default: 'file',
      required: true,
      trim: true,
      type: String,
    },
    path: {
      default: '',
      required: true,
      trim: true,
      type: String,
    },
    default: Object.create(null),
  },
},
options);

export interface SubmissionModel extends Document {
  exam: ExamModel;
  files: Array<FileModel>;
  stack: StackModel;
  student: StudentModel;
  instructor: UserModel;
  takenOn: Date;
  source: {
    link: string,
    path: string,
  };
  createdAt: Date;
  updatedAt: Date;
}

export const Submission = model<SubmissionModel>('Submission', submissionSchema);
