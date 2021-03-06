import { model, Schema, Document } from 'mongoose';

const beltSchema = new Schema({
  color: {
    lowercase: true,
    required: [true, 'Color is required information'],
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

beltSchema.set('toObject', { getters: true });

export const Belt = model<BeltModel>('Belt', beltSchema);
