window.onload = inicio;
const url = "json/getCiudades.php.json";
//Se identifica el contenedor del html donde van los datos
//está pendiente
function inicio() {
  //ir a por los datos
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => cargar(datos))
    .catch((error = alert(error)));
}

function cargar(datos) {
  // Seleccionamos el elemento tbody donde se agregarán las filas
  const filas = document.querySelector("tbody");

  // Iteramos sobre los datos y llamamos a la función 'mostarDatos'
  datos.forEach(mostarDatos);

  // Función que se encarga de mostrar los datos de cada ciudad
  function mostarDatos(item) {
    // Creamos una nueva fila
    const fila = document.createElement("tr");

    // creamos las celdas para cada elemento de la tabla
    const ciudad = document.createElement("td");
    const habitantes = document.createElement("td");
    const video = document.createElement("td");
    const imagen = document.createElement("td");
    const mapa = document.createElement("td");
    const id = document.createElement("td");

    // Asignar valores a las celdas
    ciudad.textContent = item.ciudad_nombre;
    habitantes.textContent = item.ciudad_poblacion;
    video.innerHTML = item.video;
    imagen.innerHTML =
      '<img src="' +
      item.imagen +
      '" alt="' +
      item.ciudad_nombre +
      '" style="width: 200px; height: auto;">';
    mapa.innerHTML = item.mapa;
    id.textContent = item.ciudad_ID;

    // Añadimos las celdas a la fila
    fila.appendChild(ciudad);
    fila.appendChild(habitantes);
    fila.appendChild(video);
    fila.appendChild(imagen);
    fila.appendChild(mapa);
    fila.appendChild(id);

    // Añadimos las filas a la tabla
    filas.appendChild(fila);
  }
}
