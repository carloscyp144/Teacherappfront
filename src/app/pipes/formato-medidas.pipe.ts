import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoMedidas'
})
export class FormatoMedidasPipe implements PipeTransform {

  transform(value: number, medida: string): string {
    return `${value.toFixed(2).toString().replace('.', ',')} ${medida}`;
  }

}
