import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimCreditCard'
})
export class TrimCreditCardPipe implements PipeTransform {

  transform(value: string, ...args: string[]): any {
    const first = value.substr(0, 3);
    const last = value.substr(13, 3);
    let middle = '';
    for (let i = 0; i < 10; i++) {
      middle += args[0];
    }
    return first + middle + last;
  }

}
