import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HierbabuenaComponent } from './hierbabuena/hierbabuena.component';
import { TomilloComponent } from './tomillo/tomillo.component';
import { MelisaComponent } from './melisa/melisa.component';
import { LavandaComponent } from './lavanda/lavanda.component';

const routes: Routes = [
  { path: 'hierbabuena', component: HierbabuenaComponent },
  { path: 'tomillo', component: TomilloComponent },
  { path: 'melisa', component: MelisaComponent },
  { path: 'lavanda', component: LavandaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  AromaticaRoutingModule{ }
