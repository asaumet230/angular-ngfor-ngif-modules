import { Component } from '@angular/core';

@Component({
    selector: 'app-heroes',
    templateUrl: 'heroe.component.html'
})

 export class HeroeComponent{
     public nombre: string = 'Ironman';
     public edad: number = 45;


     //Getters:
     get nombreCapitalizado(): string{ //Esto es un getter no una función
         return this.nombre.toLocaleUpperCase();
     }

     //Metodos:
     obtenerDatos(): string{
         return `${this.nombre} - ${this.edad}`;
     }

     cambiarNombre(): void{
          this.nombre = 'Spiderman';
     }
     cambiarEdad(): void{
         this.edad = 30;
     }
    
 }