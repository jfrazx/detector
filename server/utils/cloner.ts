import { read, FileData, WalkOptions } from './files-reader';
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
  {
    ignore_directories,
    ignore_files,
    min_file_size,
    max_file_size,
  }: WalkOptions
): Promise<FileData[]> {
  const _repo = await cloner(link, source);

  return await read(directory, {
    ignore_directories,
    ignore_files,
    min_file_size,
    max_file_size,
  });
}
