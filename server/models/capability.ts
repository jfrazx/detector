import { model, Schema, Document } from 'mongoose';

const capabilitySchema = new Schema({
  ability: {
    required: true,
    trim: true,
    type: String,
    unique: true,
  }
});

export interface CapabilityModel extends Document {
  ability: string;
}

export const Capability = model<CapabilityModel>('Capability', capabilitySchema);
