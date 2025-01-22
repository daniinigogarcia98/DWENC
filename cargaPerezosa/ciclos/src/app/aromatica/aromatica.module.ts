import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AromaticaRoutingModule } from './aromatica-routing.module';
import { TomilloComponent } from './tomillo/tomillo.component';
import { HierbabuenaComponent } from './hierbabuena/hierbabuena.component';
import { MelisaComponent } from './melisa/melisa.component';
import { LavandaComponent } from './lavanda/lavanda.component';


@NgModule({
  declarations: [
    HierbabuenaComponent,
    TomilloComponent,
    MelisaComponent,
    LavandaComponent
  ],
  imports: [
    CommonModule,
    AromaticaRoutingModule
  ]
})
export class AromaticaModule { }
