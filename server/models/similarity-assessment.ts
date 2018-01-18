import { model, Schema, Document } from 'mongoose';
import { SubmissionModel, StackModel, ExamModel, UserModel, RatingModel } from './';

const options: any = {
  timestamps: true,
  usePushEach: true,
};

const simliarityAssessmentSchema = new Schema({
  source: {
    ref: 'Submission',
    required: true,
    type: Schema.Types.ObjectId,
  },
  reference: {
    ref: 'Submission',
    required: true,
    type: Schema.Types.ObjectId,
  },
  stack: {
    ref: 'Stack',
    required: true,
    type: Schema.Types.ObjectId,
  },
  exam: {
    ref: 'Exam',
    required: true,
    type: Schema.Types.ObjectId,
  },
  initiator: {
    ref: 'User',
    type: Schema.Types.ObjectId,
  },
  rating: {
    required: true,
    type: Number,
  },
  ratings: [
    {
      ref: 'Rating',
      type: Schema.Types.ObjectId,
    },
  ],
},
options);

export interface SimilarityAssessmentModel extends Document, ISimilarityAssessment {
  createdAt: Date;
  updatedAt: Date;
}

export interface ISimilarityAssessment {
  source: SubmissionModel;
  reference: SubmissionModel;
  stack: StackModel;
  exam: ExamModel;
  initiator: UserModel;
  rating: number;
  ratings: Array<RatingModel>;
}

export const SimilarityAssessment = model<SimilarityAssessmentModel>('SimilarityAssessment', simliarityAssessmentSchema);
