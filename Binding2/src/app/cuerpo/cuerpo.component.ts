import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
  personas = [
    { id: 1, nombre: 'Ana', edad: 25 },
    { id: 2, nombre: 'Luis', edad: 30 },
    { id: 3, nombre: 'Sofia', edad: 28 },
    { id: 4, nombre: 'Miguel', edad: 35 }];
    indicehover: number | null = null;
    verEdad(indice: number): void {
      this.indicehover = indice;
    }
    verNombre(): void {
      this.indicehover = null;
    }
    periodicos = [
      { nombre: 'El País', url: 'https://elpais.com', displayName: 'El País' },
      { nombre: 'El Mundo', url: 'https://elmundo.es', displayName: 'El Mundo' },
      { nombre: 'ABC', url: 'https://abc.es', displayName: 'ABC' },
      { nombre: 'La Vanguardia', url: 'https://lavanguardia.com', displayName: 'La Vanguardia' },
      { nombre: 'El Diario', url: 'https://eldiario.es', displayName: 'El Diario' }
    ];

    // Cambiar el nombre por la URL al pasar el mouse
    onMouseOver(periodico: any): void {
      periodico.displayName = periodico.url;  // Cambia el nombre por la URL
    }

    // Restaurar el nombre original cuando el mouse se va
    onMouseLeave(periodico: any): void {
      periodico.displayName = periodico.nombre;  // Vuelve al nombre original
    }
colores:string[]=["red","green","blue","gray","yellow","pink","purple","black","lightBlue","lightcoral"];
tamanios:string[]=['10px','15px','20px','25px','30px','35px','40px','45px','50px','55px'];
color:string="";
tamanioF:string="";
activarB:boolean=false;
temporizador:any;
Textodeboton:string="Botón Habilitado";
Segundos:number=10;
cuentaAtras() {
 this.activarB=true;
 this.Textodeboton="Botón Deshabilitado";
 this.temporizador=setInterval(()=>{
  this.Segundos--;
  this.color=this.colores[this.Segundos];
  this.tamanioF=this.tamanios[this.Segundos];
  if(this.Segundos==0){
    clearInterval(this.temporizador);
    this.Textodeboton="Botón Habilitado";
    this.Segundos=10;
    this.activarB=false;
  }
 },1000);
}
}
