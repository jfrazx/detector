import { Stack } from '../../submission';
import { User } from './user';

export class Location {
  _id: string;
  city: string;
  stacks: Stack[];
  instructors: User[];
}
