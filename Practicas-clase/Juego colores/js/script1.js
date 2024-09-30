// Declaramos los arrays de colores
const colores = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "lightblue", "white", "gray"];
const nombreColor = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja", "Rosa", "AzulClaro", "Blanco", "Gris"];
// Declaramos las variables 
let puntuacion = 0;
let segundos = 0;
let tiempo;
//Crearemos el div que mostrara los colores y el nombre del con createElement
const divColores = document.createElement("div");
divColores.style.width = "150px";
divColores.style.height = "100px";
divColores.style.fontSize = "20px";
document.body.appendChild(divColores);
// Crearemos el texto que mostrara la puntuacion y los  segundos
const textoPuntuacion = document.createElement("p");
textoPuntuacion.style.fontSize = "30px";
document.body.appendChild(textoPuntuacion);
//crearemos los botones para jugar y parar
const botonJugar = document.createElement("button");
botonJugar.textContent = "Jugar";
document.body.appendChild(botonJugar);
const botonParar = document.createElement("button");
botonParar.textContent = "Parar";
document.body.appendChild(botonParar);
//Creamos la funcion para obtener la puntuación actual
function getPuntuacion() {
  return puntuacion;
}
// Crearemos la funcion para obtener el tiempo actual
function getTiempo() {
  return segundos;
}
// crearemos la funcion para parar
function parar() {
  jugar = false;
  textoPuntuacion.textContent = `Segundos:`+ getTiempo() +`Puntuación:`+ getPuntuacion();
  segundos = 0; 
  puntuacion = 0; 
}
// crearemos la funcion para jugar
function jugar() {
  
  // Generamos un nuevo color aleatorio cada vez que se presiona el botón Jugar
  const random = Math.floor(Math.random() * colores.length);
  divColores.style.backgroundColor = colores[random];
  divColores.textContent = nombreColor[random];

  // Iniciamos el intervalo de tiempo
  tiempo = setInterval(() => {
    segundos++;
    textoPuntuacion.textContent = `Segundos:`+ getTiempo()+`Puntuación:`+ getPuntuacion();
  }, 1000);
  // Agregamos un evento de click al divColores para contabilizar la puntuación
  divColores.addEventListener("click", () => {
    if (divColores.style.backgroundColor === colores[random]) {
      puntuacion++;
      textoPuntuacion.textContent = `Segundos:`+ getTiempo()+`Puntuación:`+ getPuntuacion();
    }
  });
  }
  // Agregamos un evento de click al botón Jugar para iniciar el juego
  botonJugar.addEventListener("click", () => {
    jugar();
    });
    // Agregamos un evento de click al botón Parar para detener el juego
    botonParar.addEventListener("click", () => {
      parar();
      });
      