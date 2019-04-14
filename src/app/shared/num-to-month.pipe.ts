import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'numToMonth',
})
export class NumToMonthPipe implements PipeTransform {
  transform(value: any, defaultValue: string = 'Invalid date'): any {
    const month = moment(value, 'MM');

    if (month.isValid()) {
      return month.format('MMMM');
    }

    return defaultValue;
  }
}
