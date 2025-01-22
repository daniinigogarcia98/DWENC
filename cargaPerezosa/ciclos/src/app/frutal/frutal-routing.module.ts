import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeraComponent} from './pera/pera.component';
import { ManzanaComponent } from './manzana/manzana.component';
import { NaranjaComponent } from './naranja/naranja.component';
import { PlatanoComponent } from './platano/platano.component';

const routes: Routes = [
  { path: 'pera', component: PeraComponent },
  { path: 'manzana', component: ManzanaComponent },
  { path: 'naranja', component: NaranjaComponent },
  { path: 'platano', component: PlatanoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrutalRoutingModule { }
