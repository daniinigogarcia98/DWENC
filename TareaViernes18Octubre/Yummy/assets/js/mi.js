window.addEventListener("load", inicio);
const urlPlatos = "getPlatos.json";
const urlCocineros = "getCocinero.json";
function inicio() {
  fetch(urlPlatos)
    .then((response) => response.json())
    .then((platos) => calculos(platos));
  fetch(urlCocineros)
    .then((response) => response.json())
    .then((cocineros) => calculos(cocineros));
}
