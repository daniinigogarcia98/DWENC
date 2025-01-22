import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrutalRoutingModule } from './frutal-routing.module';
import { ManzanaComponent } from './manzana/manzana.component';
import { PeraComponent } from './pera/pera.component';
import { PlatanoComponent } from './platano/platano.component';
import { NaranjaComponent } from './naranja/naranja.component';


@NgModule({
  declarations: [
    ManzanaComponent,
    PeraComponent,
    PlatanoComponent,
    NaranjaComponent
  ],
  imports: [
    CommonModule,
    FrutalRoutingModule
  ]
})
export class FrutalModule { }
