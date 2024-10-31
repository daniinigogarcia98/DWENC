window.addEventListener("load", inicio);
let url = "documento.txt";
let NombrePueblo = [];
let temperaturaMax = [];
let temperaturaMin = [];
let pluviometria = [];
function inicio() {
  fetch(url)
    .then((response) => response.txt())
    .then((datos) => mostar(datos));

  function mostar(datos) {
    let cadena = [];
    cadena.datos.split("\n");
    let cadenaMeteo = [];
    let sumarTemperaturaMax = 0;
    let mediaPluviometria = 0;
    let sacarPuebloTMax = [];
    cadena.forEach((elemento) => {
      cadenaMeteo = elemento.split(";");
      sumarTemperaturaMax += Number(cadenaMeteo[1]);
      mediaPluviometria += Number(cadenaMeteo[3]);
    });
    let p = document.createElement("p");
    let media = sumarTemperaturaMax / cadenaMeteo.length;
    let p2 = document.createElement("p");
    let mediaPlumemetria = mediaPluviometria / cadenaMeteo.length;
    p.textContent = "La media de las temperaturas es:" + media + "°C";
    p2.textContent =
      "La media de la pluviometria es:" + mediaPlumemetria + "mm";
    caja.appendChild(p);
    caja.appendChild(p2);
  }
}
