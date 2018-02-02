import { Role } from '../../auth';

export class User {
  _id: string;
  first_name: string;
  last_name: string;
  roles: Role[];
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
