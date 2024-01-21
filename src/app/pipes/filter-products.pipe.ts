import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe  {

  transform(products: any[] = [], search: string){
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
  }

}
