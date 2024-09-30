// Seleccionamos el elemento de la galería
const gallery = document.querySelector('.gallery');

// Ruta a la carpeta de imágenes
const DirectorioImagen =  'img/';

// Lista predefinida con los nombres de las imágenes
const imagenes = ['0.JPG','1.JPG','2.JPG','3.JPG','4.JPG','5.JPG','6.JPG','7.JPG','8.JPG',
'9.JPG','10.JPG','11.JPG','12.JPG','13.JPG','14.JPG','15.JPG','16.JPG','17.JPG'
,'18.JPG','19.JPG'];

// Función para seleccionar una imagen aleatoria
function ImagenesAleatorias(imagenes) {
  const randomIndex = Math.floor(Math.random() * imagenes.length);
  return imagenes[randomIndex];
}

// Función para cargar las imágenes
function CargarImagenes(imagenes) {
  for (let i = 0; i < 12; i++) {
    const img = document.createElement('img');
    img.src = DirectorioImagen + ImagenesAleatorias(imagenes);
    gallery.appendChild(img);
  }
}

// Función para cambiar las imágenes cada 2 segundos
function CambioImagenes(imagenes) {
  gallery.innerHTML = ''; // Limpiamos la galería
  CargarImagenes(imagenes); // Cargamos nuevas imágenes
}

// Inicializamos la galería
CargarImagenes(imagenes);

// Establecemos el temporizador
setInterval(() => CambioImagenes(imagenes), 2000); // 2000ms = 2 segundos