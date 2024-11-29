import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  colorRandom:string="";
  colores:string[]=["red","green","blue","yellow","lightblue","purple","pink","brown","black","white"];
  numero:number=0;
colorAleatorio() {
this.numero=Math.floor(Math.random()*this.colores.length-1);
this.colorRandom=this.colores[this.numero];
}

}
