import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaCor',
  standalone: true
})
export class CategoriaCorPipe implements PipeTransform {
  transform(value: string): string {
    switch (value?.toLowerCase()) {
      case 'entrada':
        return 'text-success'; 
      case 'principal':
        return 'text-primary'; 
      case 'sobremesa':
        return 'text-purple'; 
      case 'bebida':
        return 'text-orange'; 
      default:
        return '';
    }
  }
}