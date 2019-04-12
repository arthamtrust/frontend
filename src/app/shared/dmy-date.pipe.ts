import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dmyDate',
})
export class DmyDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return moment(value).format('Do MMMM, YYYY');
  }
}
