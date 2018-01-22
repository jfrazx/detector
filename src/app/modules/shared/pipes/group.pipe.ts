import { Pipe, PipeTransform } from '@angular/core';

const toString = Object.prototype.toString;

@Pipe({
  name: 'group'
})
export class GroupPipe implements PipeTransform {

  transform(values: string, by?: number): string[][];
  transform<T>(values: T[], by?: number): T[][];
  transform<T>(values: T[] | string, by: number = 2): any[][] {
    if (isNaN(parseInt(toString.call(by), 10)) || by <= 0) { by = 2; }

    const results: any[][] = [];

    if (Array.isArray(values) || typeof values === 'string') {
      for (let index = 0; index < values.length; index += by) {
        results.push(
          values.slice(index, index + by)  as any
        );
      }
    }

    return results;
  }
}
