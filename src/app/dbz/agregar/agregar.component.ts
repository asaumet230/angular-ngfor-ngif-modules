import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  /*@Input() nuevo:Personaje={
    nombre: '',
    poder:0
  }*/

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public nuevo: Personaje={
    nombre: '',
    poder:0
  }

  public mensaje: string = '';
   
  constructor( private DbzService: DbzService){}

  validar(): void{
   // e.preventDefault(); Angular tiene funcionalidades integradas de formulario que
   // no ocupan enviar eventos
   if(this.nuevo.nombre.trim().length === 0 || this.nuevo.poder === 0){
     this.mensajeValidacion();
     return;
   } 

    this.DbzService.agregarPersonaje(this.nuevo);
    console.log(this.nuevo);
   // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo ={nombre:'', poder: 0};
  
  }

  mensajeValidacion(): void{
    this.mensaje= 'Debes agregar un personaje';

    setTimeout(() => {
      this.mensaje = '';
    }, 3000);
  }
 

}
