import { model, Schema, Document } from 'mongoose';
import {
  ExamModel,
  StackModel,
  StudentModel,
  SubmissionFileModel,
  UserModel,
} from './';

const options: any = {
  timestamps: true,
  usePushEach: true,
};

const { ObjectId } = Schema.Types;

const submissionSchema = new Schema(
  {
    belt: {
      ref: 'Belt',
      type: ObjectId,
    },
    stack: {
      ref: 'Stack',
      required: true,
      type: ObjectId,
    },
    exam: {
      ref: 'Exam',
      required: true,
      type: ObjectId,
    },
    files: [
      {
        ref: 'SubmissionFile',
        required: true,
        type: ObjectId,
      },
    ],
    student: {
      ref: 'Student',
      type: ObjectId,
    },
    instructor: {
      ref: 'User',
      type: ObjectId,
    },
    integrity: {
      default: true,
      index: true,
      required: true,
      type: Boolean,
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
  options
);

export interface SubmissionModel extends Document {
  exam: ExamModel;
  files: Array<SubmissionFileModel>;
  stack: StackModel;
  student: StudentModel;
  instructor: UserModel;
  integrity: boolean;
  takenOn: Date;
  source: {
    link: string;
    path: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

submissionSchema.set('toObject', { getters: true });

export const Submission = model<SubmissionModel>(
  'Submission',
  submissionSchema
);
