import { Stack } from './stack';

export class Exam {
  _id: string;
  active: boolean;
  name: string;
  option: string;
  stack: Stack;
  wireframe: string;
}
