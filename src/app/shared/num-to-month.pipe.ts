import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'numToMonth',
})
export class NumToMonthPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return moment(value, 'MM').format('MMMM');
  }
}
