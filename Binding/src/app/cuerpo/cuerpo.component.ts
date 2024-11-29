import { Component } from '@angular/core';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent {
activadoA:boolean=false;
activadoO:boolean=false;
imgChicaT:string="";
imgChicoT:string="";
wT1:number=0;
wT2:number=0;
hT1:number=0;
hT2:number=0;
// temporizador:NodeJS.Timer | undefined;
temporizador1:any;
temporizador2:any;
activarChicaTemporizador() {
  this.activadoA=true;
  clearInterval(this.temporizador2);
  this.activadoO=false;
this.temporizador1=setInterval(()=>{
  this.numAL=Math.floor(Math.random()*100);
  this.imgChicaT="https://randomuser.me/api/portraits/women/"+this.numAL+".jpg";
  this.wT1=Math.ceil(Math.random()*300);
  this.hT1=Math.ceil(Math.random()*300);
},1000);
}
activarChicoTemporizador() {
  this.activadoO=true;
  clearInterval(this.temporizador1);
  this.activadoA=false;
  this.temporizador2=setInterval(()=>{
    this.numAL=Math.floor(Math.random()*100);
    this.imgChicoT="https://randomuser.me/api/portraits/men/"+this.numAL+".jpg";
    this.wT2=Math.ceil(Math.random()*300);
    this.hT2=Math.ceil(Math.random()*300);
  },1000);
}
imgChica:string="";
imgChico:string="";
w1: number=0;
w2: number=0;
h1: number=0;
h2: number=0;
numAL:number=0;
activarChica() {
this.numAL=Math.floor(Math.random()*100);
this.imgChica="https://randomuser.me/api/portraits/women/"+this.numAL+".jpg";
this.w1=Math.ceil(Math.random()*300);
this.h1=Math.ceil(Math.random()*300);
}
activarChico() {
  this.numAL=Math.floor(Math.random()*100);
  this.imgChico="https://randomuser.me/api/portraits/men/"+this.numAL+".jpg";
  this.w2=Math.ceil(Math.random()*300);
  this.h2=Math.ceil(Math.random()*300);
  }
}

