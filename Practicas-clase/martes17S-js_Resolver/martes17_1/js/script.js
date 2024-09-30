window.addEventListener("load", inicio);
let intentos = 0;
let colores = ["red", "blue", "green", "pink", "orange"];
function inicio() {
  console.log("entrando en js");
  //identificar el hueco (li) donde se ubica los resultados
  const dias = document.getElementsByTagName("li");
  const lista = document.getElementsByTagName("ul");
  //identificar el botón que desencadena el evento, y funcion (accion donde se desarrolla)
  document.getElementById("btn1").addEventListener("click", boton1);
  document.getElementById("btn2").addEventListener("click", boton2);
  document.getElementById("btn3").addEventListener("click", boton3);
  //identificar el btn4 y añadir el lanzador de eventos (Crear Función)
  document.getElementById("btn4").addEventListener("click", boton4);

  function boton1() {
    for (let item of dias) {
      // En cada hueco un valor aleatorio entre 1 y 1000
      let numeroRandom = Math.floor(Math.random() *1000);
      item.textContent = numeroRandom;84
    }
  }
  function boton2() {
    for (let item of dias) {
      //en cada hueco un valor aleatorio
      let numeroRandom = Math.floor(Math.random() *1000);
      item.textContent = numeroRandom;
      if (numeroRandom > 500) {
        item.style.color = "red";
      } else {
        item.style.color = "blue";
      }
    }
  }
  function boton3() {
    for (let item of dias) {
      //en cada hueco un valor aleatorio
      let numeroRandom = Math.floor(Math.random() *1000);
      item.textContent = numeroRandom;
      let randomColor=Math.round(Math.random()*colores.length);
      item.textContent = numeroRandom;
      item.style.color = colores[randomColor];
    }
  }
  function boton4() {
    console.log("entro en boton4");
    //huecos donde ubicar el resultado del proyecto
    const items=document.querySelector("ul");
    const Li1 = items.firstElementChild;
    const Li2 = Li1.nextElementSibling;
    //desarrollo el resultado
    let num1 = Math.floor(Math.random() *10);
    let num2 = Math.floor(Math.random() *10);
    //Mostrar o renderizar el resultado
    Li1.textContent=num1;
    Li2.textContent=num2;
    if(num1==num2){
      alert("Número1:"+num1+"Número2:"+num2+ "iguales");
    }
  }
}
