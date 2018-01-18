import { model, Schema, Document } from 'mongoose';
import { LocationModel } from './location';
import { isEmail } from 'validator';

const studentSchema = new Schema({
  location: {
    ref: 'Location',
    required: true,
    type: Schema.Types.ObjectId,
  },
  first_name: {
    index: true,
    required: true,
    trim: true,
    type: String,
  },
  last_name: {
    index: true,
    required: true,
    trim: true,
    type: String,
  },
  email: {
    trim: true,
    type: String,
    unique: true,
    validate: {
      validator(value) {
        return isEmail(value);
      }
    },
  }
});

export interface StudentModel extends Document {
  location: LocationModel;
  first_name: string;
  last_name: string;
}

export const Student = model<StudentModel>('Student', studentSchema);
