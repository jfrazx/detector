import { model, Schema, Document } from 'mongoose';

const capabilitySchema = new Schema({
  ability: {
    required: [true, 'Ability is required information'],
    trim: true,
    type: String,
    unique: true,
  },
});

export interface CapabilityModel extends Document {
  ability: string;
}

capabilitySchema.set('toObject', { getters: true });

export const Capability = model<CapabilityModel>(
  'Capability',
  capabilitySchema
);
