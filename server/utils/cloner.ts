import { read } from './files-reader';
import * as cloner from 'git-clone';

/**
 *
 *
 * @export
 * @param {string} link
 * @param {string} source
 * @param {string} directory
 * @param {Ignore} { ignore_directories, ignore_files }
 * @returns {Promise<string[]>}
 */
export async function clone(
  link: string,
  source: string,
  directory: string,
  { ignore_directories, ignore_files }: Ignore
): Promise<string[]> {
    const repo = await cloner(link, source);

    return await read(
            directory,
            {
              ignore_directories,
              ignore_files,
            }
          );
}

interface Ignore {
  ignore_directories: Array<string>;
  ignore_files: Array<string>;
}
