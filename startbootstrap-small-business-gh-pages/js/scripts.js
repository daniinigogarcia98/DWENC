/*!
 * Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
window.onload = inicio;

const url = "json/getTodoPersonal.json";
//Seleccionamos el contenedor padre donde cuelgan los contenedores de tarjetas row.gx-4.gx-lg-5
const contenedorPadre = document.querySelector(".row.gx-4.gx-lg-5");
function inicio() {
  eliminarPlantilla();
  //ir a por los datos
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => mostar(datos))
    .catch((error = alert(error)));
}

function mostar(datos) {
  datos.forEach((datos) => {
    //Siguiendo la estrucura del html vamos a crear los contenedores que utilizaremos para cada tarjeta
    //Creamos el contenedor que esta Segundo del padre (contenedorPadre(row.gx-4.gx-lg-5))
    const contenedor = document.createElement("div");
    //Este es el segundo div
    contenedor.className = "col-md-4 mb-5";
    contenedorPadre.appendChild(contenedor);
    //Añadimos el contenedor que esta segundo del padre
    const contenedor2 = document.createElement("div");
    //Este es el tercer div
    contenedor2.className = "card h-100";
    contenedor.appendChild(contenedor2);
    //Creamos los contenedores de las tarjetas card-body
    const contenedor3 = document.createElement("div");
    //Este es el cuarto div
    contenedor3.className = "card-body";
    contenedor2.appendChild(contenedor3);
    //Creamos el contenedor de la imagen
    const imagen = document.createElement("img");
    imagen.setAttribute("src", datos.imagen);
    //Añadimos un estilo de tarjeta
    imagen.className = "card-img-top";
    contenedor2.appendChild(imagen);
    //Agregamos el h2 que es el card-title
    const nombre = document.createElement("h2");
    //Este es el quinto div
    nombre.className = "card-title";
    nombre.innerText = datos.nombre;
    contenedor2.appendChild(nombre);
    //Insertamos los que p dara descripcion desde el json siguiendo
    // la estructura del json
    const descripcion1 = document.createElement("p");
    //Este es el sexto div
    descripcion1.className = "card-text";
    descripcion1.innerText = "Cargo:" + datos.cargo;
    contenedor2.appendChild(descripcion1);
    const descripcion2 = document.createElement("p");
    descripcion2.className = "card-text";
    descripcion2.innerText = "Edad:" + datos.edad;
    contenedor2.appendChild(descripcion2);
    const descripcion3 = document.createElement("p");
    descripcion3.className = "card-text";
    descripcion3.innerText = "Direccion:" + datos.direccion;
    contenedor2.appendChild(descripcion3);
    // Agregamos El boton que es el card-footer dentro del contenedor de la tarjeta
    const contenedor4 = document.createElement("div");
    contenedor4.className = "card-footer";
    const boton = document.createElement("a");
    boton.className = "btn btn-primary btn-sm";
    boton.href = "#!";
    boton.innerText = "Más Info";
    contenedor4.appendChild(boton);
    contenedor2.appendChild(contenedor4);
  });
}
function eliminarPlantilla() {
  //Seleccionamos todos los elementos con clase card
  // y los eliminamos
  const tarjetas = document.querySelectorAll(".card ");
  for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].remove();
  }
}
