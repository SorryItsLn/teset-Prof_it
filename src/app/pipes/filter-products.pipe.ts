import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/datsInt';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter(p=> p.category.toLowerCase().includes(search.toLowerCase()))
  }

}
