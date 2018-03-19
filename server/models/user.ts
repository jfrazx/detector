import { model, Schema, Document, Model } from 'mongoose';
import { LocationModel, RoleModel } from './';
import { isEmail } from 'validator';
import * as bcrypt from 'bcrypt';

const options: any = {
  timestamps: true,
  usePushEach: true,
};

const userSchema = new Schema(
  {
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
    location: {
      ref: 'Location',
      type: Schema.Types.ObjectId,
    },
    roles: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId,
      },
    ],
    password: {
      required: true,
      trim: true,
      type: String,
    },
    email: {
      required: true,
      match: /^[A-Za-z0-9]+@codingdojo\.com$/,
      trim: true,
      type: String,
      unique: true,
      validate: [
        {
          validator(value: string): boolean {
            return isEmail(value);
          },
        },
      ],
    },
  },
  options
);

userSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    return next();
  }

  bcrypt
    .hash(this.password, 10)
    .then(hashed => {
      this.password = hashed;
      next();
    })
    .catch(next);
});

userSchema.statics.validatePassword = function(
  candidatePassword: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, hashedPassword);
};

export interface UserModel extends Document {
  first_name: string;
  last_name: string;
  location: LocationModel;
  roles: Array<RoleModel>;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser extends Model<UserModel> {
  validatePassword(
    candidatePassword: string,
    hashedPassword: string
  ): Promise<boolean>;
}

userSchema.set('toObject', { getters: true });

export const User = model<UserModel>('User', userSchema);
