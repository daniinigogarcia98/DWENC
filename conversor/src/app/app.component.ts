import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Euroconversor';
  euros: number = 0;
  yenes: number = 0;
  dolares: number = 0;
  libras: number = 0;

  // Tasas de conversión
  d_l: number = 1.10;
  d_e: number = 1.08;
  d_y: number = 123.12;

  e_l: number = 0.91;
  e_y: number = 134.72;
  e_d: number = 0.93;

  l_y: number = 149.67;
  l_e: number = 1.10;
  l_d: number = 1.20;
  // Métodos para actualizar valores
  actualizarDolares() {
    this.euros = this.dolares * this.d_e;
    this.yenes = this.dolares * this.d_y;
    this.libras = this.dolares * this.d_l;
  }

  actualizarLibras() {
    this.dolares = this.libras * this.l_d;
    this.euros = this.libras * this.l_e;
    this.yenes = this.libras * this.l_y;
  }

  actualizarYenes() {
    this.dolares = this.yenes * (1 / this.d_y);
    this.euros = this.yenes * (1 / this.e_y);
    this.libras = this.yenes * (1 / this.l_y);
  }

  actualizarEuros() {
    this.dolares = this.euros * this.e_d;
    this.yenes = this.euros * this.e_y;
    this.libras = this.euros * this.e_l;
  }

  limpiar() {
    this.dolares = 0;
    this.euros = 0;
    this.libras = 0;
    this.yenes = 0;
  }
}
