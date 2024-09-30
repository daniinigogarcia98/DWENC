window.addEventListener("load", inicio);

let imagenesCargadas = false;

// Función que se ejecuta cuando se carga la página
function inicio() {
  console.log("entrando");
  // Identificar contenedor principal
  const contenedorPrincipal = document.body;
  // Crear un botón de comando para ejecutar la acción principal
  const botonCargar = document.createElement("button");
  // Añadir texto al botón
  botonCargar.textContent = "Cargar Imagen";
  // Programar evento
  botonCargar.addEventListener("click", () => cargarImagen(contenedorPrincipal));
  contenedorPrincipal.appendChild(botonCargar);
}

// Función que se encarga de cargar las imágenes
function cargarImagen(contenedorPrincipal) {
  console.log("cargar imagen");
  // Eliminar imágenes existentes
  // Seleccionar todos los elementos img hijos del contenedor principal
  const imagenes = contenedorPrincipal.querySelectorAll("img");
  // Iterar sobre ellos y eliminarlos
  imagenes.forEach(imagen => imagen.remove());
  
  // Cargar nuevas imágenes
  for (let i = 0; i < 20; i++) {
    const imagen = document.createElement("img");
    let nR = Math.floor(Math.random() * 40);
    let genero = "women";
    if (i % 2 == 0) {
      genero = "women";
    } else {
      genero = "men";
    }
    imagen.setAttribute(
      "src",
      "https://randomuser.me/api/portraits/" + genero + "/" + nR + ".jpg"
    );
    contenedorPrincipal.appendChild(imagen);
  }
}