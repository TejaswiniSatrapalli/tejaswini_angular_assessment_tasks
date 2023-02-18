import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'info'
})
export class InfoPipe implements PipeTransform {
  transform(value: any) {
    let info:string = value+'';
     return info.substring(0,10)+'...';

  }

}
