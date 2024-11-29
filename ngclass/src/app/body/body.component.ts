import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  textoColor: string = '';
  tamanio: string = '';
  colorFondo: string = '';
 claseColor: string = '';
 claseTamanio:string = '';
 claseBack: string = '';

  cambioColor() {
    if (this.textoColor === 'rojo') {
      this.claseColor = 'rojo';
    } else if (this.textoColor === 'azul') {
      this.claseColor = 'azul';
    } else if (this.textoColor === 'verde') {
      this.claseColor = 'verde';
    } else if (this.textoColor === 'amarillo') {
      this.claseColor = 'amarillo';
    } else {
      this.claseColor = '';
    }
  }

  cambioTamanio() {

   this.claseTamanio = 'tamanio-' + this.tamanio;
 }

 cambioBack() {
   this.claseBack = '' + this.colorFondo;
 }

}
