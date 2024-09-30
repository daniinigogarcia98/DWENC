console.log("entro ej js")
document.getElementById("btn1").onclick=funcion1;
document.getElementById("btn2").onclick=funcion2;
document.getElementById("btn3").onclick=funcion3;
document.getElementById("btn4").onclick=funcion4;
document.getElementById("btn5").onclick=funcion5;
document.getElementById("btn6").onclick=funcion6;


function funcion1(){
    console.log("entro");
    
    const listaComponentes=document.getElementsByClassName("caja");
    
    
    for (let item of listaComponentes){
        console.log("entro");
        item.style.background="green";
     item.onclick=funcionx;
     
     
     
}
function funcion2(){
    console.log("entro");
    
}
function funcion3(){
 

}
function funcion4(){
 
}
function funcion5(){
  const fecha=new Date();
  const anio=fecha.getFullYear();
  const mes=fecha.getMonth();
  const dia=fecha.getDate();
  const horas=fecha.getHours();
  const minutos=fecha.getMinutes();
   document
}
function funcion6(){
  
}
}