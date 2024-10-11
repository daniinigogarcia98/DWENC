window.onload = inicio;
//const listaImagenes=document.querySelectorAll("#images img");
const listaImagenes = document.getElementById("images").querySelectorAll("img");
const contenedorDestino = document.querySelector("#picture img");
//identifico el contenedor de fondo para el color de fondo o colorborde
const contenedorFondo = document.getElementById("picture");
//array de los colores de fondo
//const listaFondos=document.querySelectorAll("#fondos div");
const listaFondos = document.getElementById("fondos").querySelectorAll("div");
//const listaFondos=document.getElementById("fondos").getElementsByTagName("div");
//array de los colores de bordes
//const listaBordes=document.querySelectorAll("#bordes div");
const listaBordes = document.getElementById("bordes").querySelectorAll("div");
const zoom = document.querySelectorAll("#zoom img");
//funcion principal
function inicio() {
  listaImagenes.forEach((img) => {
    img.onclick = () => {
      cargarImagenes(img, contenedorDestino);
    };
  });
  //cargar fondos
  listaFondos.forEach((fondo) => {
    fondo.onclick = () => {
      mostrarFondo(fondo, contenedorFondo);
    };
  });
  //cargar bordes
}
//funcionalidades
function cargarImagenes(img, contenedorDestino) {
  contenedorDestino.src = img.src;
}
function mostrarFondo(fondo, contenedorFondo) {
  switch (fondo.id) {
    case "negro":
      contenedorFondo.style.backgroundColor = "black";
      break;
    case "rojo":
      contenedorFondo.style.backgroundColor = "red";
      break;
    case "azul":
      contenedorFondo.style.backgroundColor = "blue";
      break;
    case "amarillo":
      contenedorFondo.style.backgroundColor = "yellow";
      break;
    case "verde":
      contenedorFondo.style.backgroundColor = "green";
      break;
    case "rosa":
      contenedorFondo.style.backgroundColor = "pink";
      break;
  }
}
