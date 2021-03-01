import { NgModule } from '@angular/core';
import { ContadorComponent } from './contadorComponent/contador.component';


@NgModule({
    declarations:[
        ContadorComponent
    ], exports:[
        ContadorComponent
    ]     
})

export class ContadorModule{}