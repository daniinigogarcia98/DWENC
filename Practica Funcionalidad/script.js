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
  //versión Camacho
  //cargar imagenes
  listaImagenes.forEach(cargarImagenes);
  //cargar fondos
  listaFondos.forEach(cargarFondos);
  //cargar bordes
  listaBordes.forEach(cargarBordes);
  //antes de cerrar la funcion de inicio quedan dos funciones :zoom+ y zoom-
  zoom[0].onclick = zoomMas;
  zoom[1].onclick = zoomMenos;
}
//fin de principal
//funcionalidades
//funciones zoom
function zoomMas() {
  contenedorDestino.style.transform = "scale(2)";
}
function zoomMenos() {
  switch (contenedorDestino.style.transform) {
    case "scale(2)":
      contenedorDestino.style.transform = "scale(1)";
      break;
    case "scale(1)":
      contenedorDestino.style.transform = "scale(0.5)";
      break;
    case "scale(0.5)":
      contenedorDestino.style.transform = "scale(0.25)";
      break;
    case "scale(0.25)":
      contenedorDestino.style.transform = "scale(0.125)";
      break;
    case "scale(0.125)":
      contenedorDestino.style.transform = "scale(0.0625)";
      break;
  }
}
function cargarImagenes(item, indice) {
  item.onclick = mostrar;
}
//evento cargar fondo
function cargarFondos(item, indice) {
  item.onclick = mostrarFondo;
}
function cargarBordes(item, indice) {
  item.onclick = mostrarBordes;
}
function mostrar(img) {
  //contenedorDestino.src=img.target.src;
  contenedorDestino.setAttribute("src", img.target.src);
}
function mostrarFondo(item) {
  let nombreColor = item.target.id;
  switch (nombreColor) {
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

function mostrarBordes(item) {
  let nombreColor = item.target.id;
  switch (nombreColor) {
    case "negroBorde":
      contenedorFondo.style.borderColor = "black";
      break;
    case "rojoBorde":
      contenedorFondo.style.borderColor = "red";
      break;
    case "azulBorde":
      contenedorFondo.style.borderColor = "blue";
      break;
    case "amarilloBorde":
      contenedorFondo.style.borderColor = "yellow";
      break;
    case "verdeBorde":
      contenedorFondo.style.borderColor = "green";
      break;
    case "rosaBorde":
      contenedorFondo.style.borderColor = "pink";
      break;
  }
}
// function cargarImagenes2(item,contenedorDestino){
// contenedorDestino.src=item.src;
// }
