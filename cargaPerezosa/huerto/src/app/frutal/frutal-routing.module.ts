import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeraComponent} from './pera/pera.component';
import { ManzanaComponent } from './manzana/manzana.component';

const routes: Routes = [
  { path: 'pera', component: PeraComponent },
  { path: 'manzana', component: ManzanaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrutalRoutingModule { }
