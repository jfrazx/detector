export interface IStack {
  ignore_directories: Array<string>;
  ignore_files: Array<string>;
  name: string;
}

export class Stack implements IStack {
  _id: string;
  ignore_directories: Array<string>;
  ignore_files: Array<string>;
  name: string;
}
