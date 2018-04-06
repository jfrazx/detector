import { Location } from './location';

export interface Student {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  location: Location;
}
