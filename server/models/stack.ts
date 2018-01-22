import { model, Schema, Document } from 'mongoose';

const options: any = {
  usePushEach: true,
};

const stackSchema = new Schema({
  ignore_directories: [
    {
      trim: true,
      type: String,
    },
  ],
  ignore_files: [
    {
      trim: true,
      type: String,
    },
  ],
  name: {
    required: [true, 'Stack name is required information'],
    trim: true,
    type: String,
    unique: true,
  },
},
options);

export interface StackModel extends Document {
  ignore_directories: Array<string>;
  ignore_files: Array<string>;
  name: string;
}

export const Stack = model<StackModel>('Stack', stackSchema);
