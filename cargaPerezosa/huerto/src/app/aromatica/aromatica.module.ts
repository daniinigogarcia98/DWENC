import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AromaticaRoutingModule } from './aromatica-routing.module';
import { TomilloComponent } from './tomillo/tomillo.component';
import { HierbabuenaComponent } from './hierbabuena/hierbabuena.component';


@NgModule({
  declarations: [
    HierbabuenaComponent,
    TomilloComponent
  ],
  imports: [
    CommonModule,
    AromaticaRoutingModule
  ]
})
export class AromaticaModule { }
