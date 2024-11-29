import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagenes: string[] = [
    'https://randomuser.me/api/portraits/women/40.jpg',
    'https://randomuser.me/api/portraits/women/41.jpg',
    'https://randomuser.me/api/portraits/women/42.jpg',
    'https://randomuser.me/api/portraits/women/43.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/40.jpg',
    'https://randomuser.me/api/portraits/men/41.jpg',
    'https://randomuser.me/api/portraits/men/42.jpg',
    'https://randomuser.me/api/portraits/men/43.jpg',
    'https://randomuser.me/api/portraits/men/44.jpg'
  ];
  imagenActual: number = 0;
  imagenAncho: number = 400;
  galeriaActiva: boolean = false;
  intervalo: any;
  anterior() {
    this.imagenActual = (this.imagenActual - 1 + this.imagenes.length) % this.imagenes.length;
  }
  siguiente() {
    this.imagenActual = (this.imagenActual + 1) % this.imagenes.length;
  }
  aumentar() {
    this.imagenAncho += 50;
  }
  disminuir() {
    if (this.imagenAncho > 100) {
      this.imagenAncho -= 50;
    }
  }

  play() {
    this.galeriaActiva = true;
    this.intervalo = setInterval(() => {
      this.siguiente();
    }, 3000);
  }
  stop() {
    this.galeriaActiva = false;
    clearInterval(this.intervalo);
  }
}
