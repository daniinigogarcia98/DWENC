import { Component } from '@angular/core';

@Component({
  selector: 'app-sumador-restador',
  templateUrl: './sumador-restador.component.html',
  styleUrls: ['./sumador-restador.component.css']
})
export class SumadorRestadorComponent {
incrementar() {
this.contador++;
}
decrementar() {

  this.contador--;
}
contador:number=0;
}
