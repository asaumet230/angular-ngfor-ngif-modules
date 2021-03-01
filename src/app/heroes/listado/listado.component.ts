import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

 public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Cap America'];
 public heroeBorrado: string = '';

 borrarElemento(): void {

  const nombre = this.heroes.pop();
  this.heroeBorrado = nombre || '';
  
 }

}
