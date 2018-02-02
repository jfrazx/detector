import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pregex',
})
export class PregexPipe implements PipeTransform {
  transform(value: string, presentable: boolean = true): string {
    if (typeof value !== 'string') {
      return value;
    }

    console.log('presenting values', value);

    return presentable
      ? value.replace(/\\+/g, '')
      : new RegExp(value).toString();
  }
}
