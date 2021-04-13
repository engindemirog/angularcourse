import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((product:Product)=>
    product.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}

//map, reduce, filter
