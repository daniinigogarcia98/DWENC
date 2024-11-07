document.addEventListener("DOMContentLoaded", inicio);
const cajaPrincipal = document.querySelector(".container");
const btnKms = document.querySelector("#ord_kms");
const btnMarca = document.querySelector("#ord_marca");
const btnConsumo = document.querySelector("#ord_consumo");
let ordenKmsAscendente = true;
let ordenMarcaAscendente = true;
let ordenConsumoAscendente = true;

// Array que contiene los datos de coches
const coches = [];

function inicio() {
  // Cargar los datos JSON
  fetch("coches.json")
    .then((response) => response.json())
    .then((data) => cargar(data));
}

function cargar(data) {
  // Volcar el JSON a la variable coches
  data.forEach((coche) => {
    coches.push(coche);
  });

  btnKms.onclick = () => ordenarPorKms();
  btnMarca.onclick = () => ordenarPorMarca();
  btnConsumo.onclick = () => ordenarPorConsumo();
}

// Funciones de ordenación
function ordenarPorKms() {
  const listadoOrdenadoKms = coches.slice().sort((a, b) => {
    return ordenKmsAscendente ? a.kms - b.kms : b.kms - a.kms;
  });
  ordenKmsAscendente = !ordenKmsAscendente; // Alternar el estado
  btnKms.textContent = ordenKmsAscendente ? "Kms - +" : "Kms + -"; // Cambiar texto del botón
  mostrarListadoOrdenado(listadoOrdenadoKms);
}

function ordenarPorMarca() {
  const listadoOrdenadoMarca = coches.slice().sort((a, b) => {
    return ordenMarcaAscendente
      ? a.marca.localeCompare(b.marca)
      : b.marca.localeCompare(a.marca);
  });
  ordenMarcaAscendente = !ordenMarcaAscendente; // Alternar el estado
  btnMarca.textContent = ordenMarcaAscendente ? "Marca - +" : "Marca + -"; // Cambiar texto del botón
  mostrarListadoOrdenado(listadoOrdenadoMarca);
}

function ordenarPorConsumo() {
  const listadoOrdenadoConsumo = coches.slice().sort((a, b) => {
    return ordenConsumoAscendente
      ? a.consumo - b.consumo
      : b.consumo - a.consumo;
  });
  ordenConsumoAscendente = !ordenConsumoAscendente; // Alternar el estado
  btnConsumo.textContent = ordenConsumoAscendente
    ? "Consumo - +"
    : "Consumo + -"; // Cambiar texto del botón
  mostrarListadoOrdenado(listadoOrdenadoConsumo);
}

// Función para mostrar la lista ordenada
function mostrarListadoOrdenado(coches) {
  limpiarCaja();
  if (coches.length > 0) {
    coches.forEach((element) => {
      const spColor = document.createElement("small");
      spColor.textContent = "kms:" + element.kms;
      const spMarca = document.createElement("small");
      spMarca.textContent = "  MARCA: " + element.marca;
      const spConsumo = document.createElement("small");
      spConsumo.textContent = "  CONSUMO: " + element.consumo;
      const spPrecio = document.createElement("small");
      spPrecio.textContent = "  PRECIO:" + element.precio;
      const salto = document.createElement("br");
      cajaPrincipal.appendChild(spColor);
      cajaPrincipal.appendChild(spMarca);
      cajaPrincipal.appendChild(spConsumo);
      cajaPrincipal.appendChild(spPrecio);
      cajaPrincipal.appendChild(salto);
    });
  }
}

// Limpiar el contenido de la caja
function limpiarCaja() {
  while (cajaPrincipal.firstElementChild) {
    cajaPrincipal.removeChild(cajaPrincipal.firstElementChild);
  }
}
