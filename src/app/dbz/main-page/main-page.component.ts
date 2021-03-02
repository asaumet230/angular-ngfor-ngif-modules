import { Component } from '@angular/core';
import {Personaje} from '../interfaces/dbz.interfaces'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  public personajes: Personaje[]=[
    {nombre: 'Pikoro', poder: 9000},
    {nombre: 'TenShin Han', poder:7000}
  ];

  public nuevo:Personaje={
    nombre: '',
    poder: 0
  };

  public mensaje: string = '';
  
  agregar(): void{
   // e.preventDefault(); Angular tiene funcionalidades integradas de formulario que
   // no ocupan enviar eventos
   if(this.nuevo.nombre.trim().length === 0 || this.nuevo.poder === 0){
     this.mensajeValidacion();
     return;
   } 

   this.personajes.push(this.nuevo);
   this.nuevo ={nombre:'', poder: 0};
    //console.log(this.nuevo);
  }
  mensajeValidacion(): void{
    this.mensaje= 'Debes agregar un personaje';

    setTimeout(() => {
      this.mensaje = '';
    }, 3000);
  }
}
