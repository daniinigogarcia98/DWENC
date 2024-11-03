window.addEventListener("DOMContentLoaded", inicio);
const tabla = document.querySelector("table");
const cabecera = document.querySelector("tr thead");
const contenidos = document.querySelector("tbody");
function inicio() {
  fetch("alumnos.csv")
    .then((respuesta) => respuesta.text())
    .then((data) => mostrar(data));
}

function mostrar(data) {
  const filas = data.split("\n");
  const encabezados = filas[0].split(",");
  const cabecera = document.createElement("tr");
  encabezados.forEach((cab) => {
    const th = document.createElement("th");
    th.textContent = cab;
    th.setAttribute("scope", "col");
    cabecera.appendChild(th);
  });
  tabla.appendChild(cabecera);

  filas.forEach((filaData, indice) => {
    if (indice > 0) {
      const columnas = filaData.split(",");
      const fila = document.createElement("tr");

      let aprobados = 0;
      for (let i = 2; i <= 6; i++) {
        if (Number(columnas[i]) >= 6) {
          aprobados++;
        }
      }

      switch (aprobados) {
        case 5:
          fila.style.backgroundColor = "green";
          break;
        case 4:
          fila.style.backgroundColor = "blue";
          break;
        case 3:
          fila.style.backgroundColor = "yellow";
          break;
        case 2:
          fila.style.backgroundColor = "pink";
          break;
        case 1:
          fila.style.backgroundColor = "orange";
          break;
        case 0:
          fila.style.backgroundColor = "red";
          break;
      }

      columnas.forEach((celda) => {
        const td = document.createElement("td");
        td.textContent = celda;
        fila.appendChild(td);
      });

      contenidos.appendChild(fila);
    }
  });

  tabla.appendChild(contenidos);
}
