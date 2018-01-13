import { model, Schema, Document } from 'mongoose';
import { SubmissionFileModel } from './submission-file';

const ratingSchema = new Schema({
  source: {
    ref: 'SubmissionFile',
    required: true,
    type: Schema.Types.ObjectId,
  },
  filename: {
    required: true,
    trim: true,
    type: String,
  },
  bestMatch: {
    target: {
      required: true,
      trim: true,
      type: String,
    },
    reference: {
      ref: 'SubmissionFile',
      required: true,
      type: Schema.Types.ObjectId,
    },
    rating: {
      required: true,
      type: Number,
    }
  },
  ratings: [
    {
      target: {
        required: true,
        trim: true,
        type: String,
      },
      reference: {
        ref: 'SubmissionFile',
        required: true,
        type: Schema.Types.ObjectId,
      },
      rating: {
        required: true,
        type: Number,
      }
    }
  ],
});

export interface RatingModel extends Document {
  filename: string;
  source?: SubmissionFileModel;
  bestMatch: Target;
  ratings: Array<Target>;
}

interface Target {
  target: string;
  reference: SubmissionFileModel;
  rating: number;
}

export const Rating = model<RatingModel>('Rating', ratingSchema);
