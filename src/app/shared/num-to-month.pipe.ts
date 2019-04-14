import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToMonth',
})
export class NumToMonthPipe implements PipeTransform {
  transform(value: any, defaultValue: string = 'Invalid date'): any {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const month = +value;

    if (!isNaN(value)) {
      return monthNames[month - 1];
    }

    return defaultValue;
  }
}
