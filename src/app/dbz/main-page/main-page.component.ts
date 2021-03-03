import { Component } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  /* Todos lo qu esta en forma de texto
   * es la manera de traer el arreglo de personajes
   * al mainpage*/

  //public personajes: Personaje[]=[];

  /*
  public nuevo:Personaje={
    nombre: '',
    poder: 0
  };

  //get personajes(): Personaje[]{
    //return this.DbzService.personajes;
  //}

  constructor(){
    //this.personajes = this.DbzService.personajes;
  }
  
  /*agregarNuevoPersonaje(personaje: Personaje){
    this.personajes.push(personaje);
  }*/
}
