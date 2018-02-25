import { Capability } from './capability';

export interface Role {
  _id: string;
  role: string;
  capabilities: Array<Capability>;
}
