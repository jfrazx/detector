import { model, Schema, Document } from 'mongoose';
import { StackModel } from './stack';

const locationSchema = new Schema({
  city: {
    required: [true, 'In which city is this Dojo location?'],
    trim: true,
    type: String,
    unique: true,
  },
  stacks: [
    {
      ref: 'Stack',
      type: Schema.Types.ObjectId,
    },
  ],
});

export interface LocationModel extends Document {
  city: string;
  stacks: Array<StackModel>;
}

export const Location = model<LocationModel>('Location', locationSchema);
