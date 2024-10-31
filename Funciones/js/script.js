window.addEventListener("load", inicio);
const div = document.querySelectorAll("col-lg-12");
inicio();
function inicio() {
  //1Num aleatorio
  while (true) {
    let num1 = Math.floor(Math.random() * 20);
    let num2 = Math.floor(Math.random() * 20);
    let cadena = `La suma de..${num1} y ${num2} es.. ${num1 + num2}`;
    let p = document.createElement("p");
    p.textContent = cadena;
    div.appendChild(p);
    if (num1 == num2) {
      break;
    }
  }
}
