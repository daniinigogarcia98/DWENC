import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HortalizaRoutingModule } from './hortaliza-routing.module';
import { TomateComponent } from './tomate/tomate.component';
import { PatataComponent } from './patata/patata.component';
import { PimientoComponent } from './pimiento/pimiento.component';
import { LechugaComponent } from './lechuga/lechuga.component';

@NgModule({
  declarations: [TomateComponent, PatataComponent, PimientoComponent, LechugaComponent],
  imports: [CommonModule, HortalizaRoutingModule]
})
export class HortalizaModule { }
