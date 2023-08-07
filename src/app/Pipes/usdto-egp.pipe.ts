import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDToEGP'
})
export class USDToEGPPipe implements PipeTransform {

  transform(value: number): number {
    return value*30;
  }

}
