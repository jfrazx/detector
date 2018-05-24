import { flatten } from './helpers';

/**
 *
 *
 * @export
 * @template T
 * @param {(...(Promise<T>| [Promise<T>])[])} promises
 * @returns {Promise<T[]>}
 */
export function all<T>(
  ...promises: (Promise<T> | [Promise<T>])[]
): Promise<T[]> {
  if (promises.length === 0) {
    return Promise.resolve([]);
  }
  return Promise.all<T>(flatten(promises));
}
