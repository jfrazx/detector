import { extname, relative, join, basename } from 'path';
import { clone } from './';
import {
  File,
  IFile,
  FileModel,
  StackModel,
  SubmissionModel,
} from '../models';

export async function build(submission: SubmissionModel, stack: StackModel): Promise<FileModel[]> {
  return await FileBuilder.for(submission, stack).build();
}

export abstract class FileBuilder {
  protected path: string;
  protected source: string;

  constructor(
    protected submission: SubmissionModel,
    protected stack: StackModel,
  ) {
    this.source = join('/tmp', `${ this.submission._id }`);
    this.path = join(this.source, this.submission.source.path || '');
  }

  static for<T extends FileBuilder>(submission: SubmissionModel, stack: StackModel): T {
    const { link } = submission.source;

    try {
      return new TYPES[extname(link)](submission, stack);
    } catch (e) {
      return new FileBuilderGit(submission, stack) as T;
    }
  }

  async build(): Promise<FileModel[]> {
    return await this.insert(
        this.builder(
          await this.prepare()
        )
      );
  }

  abstract async prepare(): Promise<string[]>;

  protected filename(name: string): string {
    const base = basename(name);
    return base.slice(0, base.length - extname(base).length);
  }

  protected builder(files: string[]): IFile[] {
    return files.map<IFile>(file => {
      return {
        submission: this.submission,
        file: basename(file),
        name: this.filename(file),
        extension: extname(file),
        path: relative(this.path, file),
      };
    });
  }

  protected async insert(files: IFile[]): Promise<FileModel[]> {
    return await File.insertMany(files);
  }
}

class FileBuilderGit extends FileBuilder {
  async prepare(): Promise<string[]> {
    return await clone(
            this.submission.source.link,
            this.source,
            this.path,
            this.stack
          );
  }
}

class FileBuilderZip extends FileBuilder {
  async prepare(): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {

    });
  }
}

class FileBuilderRar extends FileBuilder {
  async prepare(): Promise<string[]> {
    return new Promise<string[]>(async (resolve, reject) => {

    });
  }
}

const TYPES = {
  '.zip': FileBuilderZip,
  '.rar': FileBuilderRar,
  '.git': FileBuilderGit,
};
