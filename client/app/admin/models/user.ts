import { Role } from './role';

export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  roles: Role[];
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
