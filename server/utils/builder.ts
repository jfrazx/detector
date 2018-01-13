import { extname, relative, join, basename } from 'path';
import { readFile } from 'fs';
import { STORAGE } from '../config';
import { clone, FileData } from './';
import {
  ISubmissionFile,
  StackModel,
  SubmissionFile,
  SubmissionFileModel,
  SubmissionModel,
} from '../models';

export async function build(submission: SubmissionModel, stack: StackModel): Promise<SubmissionFileModel[]> {
  return await FileBuilder.for(submission, stack).build();
}

export abstract class FileBuilder {
  protected path: string;
  protected source: string;

  constructor(
    protected submission: SubmissionModel,
    protected stack: StackModel,
  ) {
    this.source = join(STORAGE, this.submission._id);
    this.path = join(this.source, this.submission.source.path || '');
  }

  static for<T extends FileBuilder>(submission: SubmissionModel, stack: StackModel): T {
    const { link } = submission.source;

    try {
      return new TYPES[extname(link).toLowerCase()](submission, stack) as T;
    } catch (e) {
      return new FileBuilderGit(submission, stack) as T;
    }
  }

  async build(): Promise<SubmissionFileModel[]> {
    return await this.insert(
        await this.builder(
          await this.prepare()
        )
      );
  }

  abstract async prepare(): Promise<FileData[]>;

  protected async builder(files: FileData[]): Promise<ISubmissionFile[]> {
    const results: Array<ISubmissionFile> = [];

    for (const { path: file, size } of files) {
      results.push(
        {
          submission: this.submission,
          contents: await this.readContents(file),
          filename: basename(file),
          extension: extname(file),
          path: relative(this.path, file),
          size,
        }
      );
    }
    return results;
  }

  protected async insert(files: ISubmissionFile[]): Promise<SubmissionFileModel[]> {
    return await SubmissionFile.insertMany(files);
  }

  protected readContents(file: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      readFile(file, 'utf-8', (error, contents) => {
        if (error) { return reject(error); }

        resolve(contents);
      });
    });
  }
}

class FileBuilderGit extends FileBuilder {
  async prepare(): Promise<FileData[]> {
    return await clone(
            this.submission.source.link,
            this.source,
            this.path,
            this.stack
          );
  }
}

/**
 * @todo
 *
 * @class FileBuilderZip
 * @extends {FileBuilder}
 */
class FileBuilderZip extends FileBuilder {
  async prepare(): Promise<FileData[]> {
    return new Promise<FileData[]>(async (resolve, reject) => {

    });
  }
}
/**
 * @todo
 *
 * @class FileBuilderRar
 * @extends {FileBuilder}
 */
class FileBuilderRar extends FileBuilder {
  async prepare(): Promise<FileData[]> {
    return new Promise<FileData[]>(async (resolve, reject) => {

    });
  }
}

const TYPES = {
  '.zip': FileBuilderZip,
  '.rar': FileBuilderRar,
  '.git': FileBuilderGit,
};
