import { model, Schema, Document } from 'mongoose';

const beltSchema = new Schema({
  color: {
    lowercase: true,
    required: true,
    trim: true,
    type: String,
    unique: true,
  },
  requirements: {
    default: '',
    required: true,
    trim: true,
    type: String,
  },
});

export interface BeltModel extends Document {
  color: string;
  requirements: string;
}

export const Belt = model<BeltModel>('Belt', beltSchema);
