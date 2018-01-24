import { Pipe, PipeTransform } from '@angular/core';
import { Graph } from 'nodegit/graph';

const toString = Object.prototype.toString;

@Pipe({
  name: 'eachSlice'
})
export class EachSlicePipe implements PipeTransform {

  /**
   * Transform a string or array of values into
   * an array of arrays containing 'size' number of elements
   *
   * @template T
   * @param {(T[] | string)} values
   * @param {number} [size=2]
   * @returns {(string | T)[][]}
   * @memberof EachSlicePipe
   */
  transform(values: string, size?: number): string[][];
  transform<T>(values: T[], size?: number): T[][];
  transform<T>(values: T[] | string, size: number = 2): any[][] {
    if (this.isInvalidType(values)) { return values as any; }
    if (this.isInvalidSize(size)) { size = 2; }

    const results: any[][] = [];

    for (let index = 0; index < values.length; index += size) {
      results.push(
        values.slice(index, index + size)  as any
      );
    }

    return results;
  }

  /**
   *
   *
   * @private
   * @param {*} values
   * @returns {boolean}
   * @memberof EachSlicePipe
   */
  private isInvalidType(values: any): boolean {
    return !Array.isArray(values) && typeof values !== 'string';
  }

  /**
   *
   *
   * @private
   * @param {*} value
   * @returns {boolean}
   * @memberof EachSlicePipe
   */
  private isInvalidSize(value: any): boolean {
    return isNaN(parseInt(toString.call(value), 10)) ||
            !Number.isInteger(value) ||
            value <= 0;
  }
}
