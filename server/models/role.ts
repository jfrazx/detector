import { model, Schema, Document } from 'mongoose';
import { CapabilityModel } from './capability';

const roleSchema = new Schema({
  role: {
    required: [true, 'Role is required information'],
    trim: true,
    type: String,
    unique: true,
  },
  capabilities: [
    {
      ref: 'Capability',
      type: Schema.Types.ObjectId,
    },
  ],
});

export interface RoleModel extends Document {
  role: string;
  capabilities: Array<CapabilityModel>;
}

export const Role = model<RoleModel>('Role', roleSchema);
