import * as klaw from 'klaw';
import * as through2 from 'through2';

export async function read(directory: string, { ignore_directories = [], ignore_files = [] }: WalkOptions = {}): Promise<string[]> {
  const walker = new Walker(directory, {
    ignore_directories,
    ignore_files,
  });

  return await walker.walk();
}

class Walker {
  private files: Array<string> = [];
  private ignoreDirectories: RegExp[];
  private ignoreFiles: RegExp[];

  constructor(public directory: string, options: WalkOptions) {
    this.ignoreDirectories = (options.ignore_directories || []).map(str => new RegExp(`\\/${str}\\/`));
    this.ignoreFiles = (options.ignore_files || []).map(str => new RegExp(str));
  }

  walk(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      klaw(this.directory, {
        filter: this.skip(this.ignoreDirectories),
      })
      .pipe(through2.obj(this.excludeDirectories))
      .pipe(through2.obj(this.skipFiles(this.ignoreFiles)))
      .on('data', (item: klaw.Item) => this.files.push(item.path))
      .on('error', reject)
      .on('end', () => resolve(this.files));
    });
  }

  private skipFiles(skippable: RegExp[]) {
    const self = this;

    return function(item: klaw.Item, enc: string, next: Function): void {
      if (self.skip(skippable)(item.path)) { (<any>this).push(item); }

      next();
    };
  }

  private skip(skippable: RegExp[]): (item: string) => boolean {
    return function(item: string): boolean {
      for (const reg of skippable) {
        if (reg.test(item)) {
          return false;
        }
      }
      return true;
    };
  }

  private excludeDirectories(item: klaw.Item, enc: string, next: Function): void {
    if (!item.stats.isDirectory()) {
      (<any>this).push(item);
    }
    next();
  }
}

export interface WalkOptions {
  ignore_directories?: string[];
  ignore_files?: string[];
}
