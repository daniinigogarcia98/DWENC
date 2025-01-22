import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutalRoutingModule } from './frutal-routing.module';
import { ManzanaComponent } from './manzana/manzana.component';
import { PeraComponent } from './pera/pera.component';


@NgModule({
  declarations: [
    ManzanaComponent,
    PeraComponent
  ],
  imports: [
    CommonModule,
    FrutalRoutingModule
  ]
})
export class FrutalModule { }
