window.addEventListener("DOMContentLoaded", inicio);
const tabla = document.querySelector("table");
const cabecera = document.querySelector("tr thead");
const contenidos = document.querySelector("tbody");
function inicio() {
  fetch("empleados.csv")
    .then((respuesta) => respuesta.text())
    .then((data) => mostrar(data));
}
function mostrar(data) {
  const filas = data.split("\n"); // Dividir en filas
  const encabezados = filas[0].split(","); // Obtener encabezados
  const cabecera = document.createElement("tr");
  //cabecera: datos de filas[0] que se manda a th
  encabezados.forEach((cab, indice) => {
    const th = document.createElement("th");
    th.setAttribute("scope", "col");
    const sp = document.createElement("sp");
    sp.style.backgroundColor = "lightgreen";
    sp.textContent = cab;
    th.appendChild(sp);
    cabecera.appendChild(th);
  });
  //contenidos
  tabla.appendChild(cabecera);
  console.log(filas);
  filas.forEach((empleados, indice) => {
    if (indice > 0) {
      const columnas = empleados.split(",");
      const fila = document.createElement("tr");

      columnas.forEach((celda, posicion) => {
        const td = document.createElement("td");

        if (posicion === 1) {
          if (Number(celda) >= 40) {
            fila.style.backgroundColor = "yellow";
          } else {
            fila.style.backgroundColor = "green";
          }
        }
        if (posicion === 3) {
          if (Number(celda[4]) >= 2000) {
            fila.style.backgroundColor = "red";
          } else {
            fila.style.backgroundColor = "green";
          }
        }

        td.textContent = celda;
        fila.appendChild(td);
      });
      contenidos.appendChild(fila);
    }

    tabla.appendChild(contenidos);
  });
}
