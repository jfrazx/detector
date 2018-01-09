import { Location } from './location';
import { Role } from './role';

export class User {
  first_name: string;
  last_name: string;
  location: Location;
  roles: Array<Role>;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
