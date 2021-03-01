import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
      <div class="div-contador">
        <h1>{{titulo}}</h1>
        <h2>La base es: <strong class="base">{{base}}</strong></h2>
        <button (click)="acumular(+base)">+{{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)">-{{base}}</button>
      </div>
        
    `,
})

export class ContadorComponent{
  public titulo: string = 'Contador App';
  public numero: number = 10;
  public base: number = 5;

    acumular( valor: number){
    this.numero += valor;
  }
}