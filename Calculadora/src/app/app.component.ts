import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado: number=0;
  dividir() {
  this.resultado=this.numero1/this.numero2;
  }
  multiplicar() {
  this.resultado=this.numero1*this.numero2;
  }
  restar() {
  this.resultado=this.numero1-this.numero2;
  }
  sumar() {
  this.resultado=this.numero1+this.numero2;
  }
  numero1: number=0;
  numero2: number=0;

}
