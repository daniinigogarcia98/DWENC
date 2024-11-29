import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
nombreFruta:string="";
lista:string[]=[];
AniadirFruta() {
  this.lista.push(this.nombreFruta);
}

}
