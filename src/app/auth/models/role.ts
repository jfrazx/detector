import { Capability } from './capability';

export class Role {
  _id: string;
  role: string;
  capabilities: Array<Capability>;
}
