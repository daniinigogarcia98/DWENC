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
  datos.forEach(mostarDatos);
  //item e indice son parametros por defecto del forEach
  function mostarDatos(item, indice) {
    alert(item.ciudad_nombre);
  }
  //   datos.forEach((item) => {
  //     alert(item.ciudad_nombre);
  //   });
}
