window.addEventListener("load", inicio);

function inicio() {
  const encab1 = document.body.querySelector("div");
  document.body.style.backgroundColor = "lightgreen";
  document.body.style.fontWeight="bold";
  const tabla = encab1.querySelector('table');
  encab1.style.backgroundColor = 'green';
  const ultimaFila = tabla.firstElementChild.lastElementChild;
  ultimaFila.style.color = 'red';
  const enlace = document.getElementById("cambio");
  enlace.href = "https://www.elmundo.es";
  const encab3 = document.getElementById("Noviembre");
  encab3.style.backgroundColor="blue";
  const rojo = document.getElementById("rojo");
  rojo.style.color="red";
  const verde = document.getElementById("verde");
  verde.style.color="green";
  const azul = document.getElementById("azul");
  azul.style.color="blue";
}