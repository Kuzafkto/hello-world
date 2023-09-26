import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letraApellido'
})
export class LetraApellidoPipe implements PipeTransform {

  transform(value?: string): string|undefined {
    if(value!="")
      return value?.charAt(0).toUpperCase();
      
    return ""
      
  }

}
