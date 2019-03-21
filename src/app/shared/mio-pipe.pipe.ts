import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mioPipe'
})
export class MioPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return "questa è la mia data nascita:" + value;
  }

}
