import { Stack } from './stack';
import { User } from './user';

export class Location {
  _id: string;
  city: string;
  stacks: Array<Stack>;
  instructors: Array<User>;
}
