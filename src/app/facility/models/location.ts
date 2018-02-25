import { Stack } from '../../submission';
import { Instructor } from './instructor';

export interface Location {
  _id: string;
  city: string;
  stacks: Stack[];
  instructors: Instructor[];
}
