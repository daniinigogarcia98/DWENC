// Seleccionamos el elemento de la galería
const gallery = document.querySelector('.gallery');


// Seleccionamos todas las etiquetas img
let elementos_img = document.querySelectorAll("img");

// Recorremos el array con un forEach
elementos_img.forEach((item) => {
  // Agregamos el atributo src a cada item
  item.setAttribute("src", 'img/5.JPG',);
});