import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  public transform(value: any, length = 20, tail = '...', accuracy = 2): string {
    if (typeof value !== 'string') return '';

    if (value.length > length + accuracy) {
      return value.slice(0, length) + tail;
    }

    return value;
  }
}
