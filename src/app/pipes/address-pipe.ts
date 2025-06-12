import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../interfaces/address';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {
  transform(address: Address): string {
    if (!address) return '';

    const parts = [
      address.number ? `${address.number}` : '',
      address.line1,
      address.line2,
      address.city,
      address.state,
      address.country,
    ].filter(Boolean); // Elimina los elementos vacíos o undefined

    return parts.join(', ');
  }
}
