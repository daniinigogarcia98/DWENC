// console.log("Acceso a html mediante el script js")
// alert ("Accediendo a un una pagina con js")
window.addEventListener("load", activar);

function activar() {
  const Activacion = document.body.querySelector("#btn1");
  Activacion.addEventListener("click", cabecera1);
}

function cabecera1() {
  const encab1 = document.body.querySelector("h1");
  console.log("encabezado1" + encab1.tagName);
  encab1.style.backgroundColor = 'silver';
  encab1.style.color = 'orange';

  const etiqueta1 = document.querySelector("h2");
  etiqueta1.style.backgroundColor = 'blue';
  etiqueta1.style.color = "orange";
  document.body.style.backgroundColor = "yellow";
  document.body.style.border = "2px solid green";
  document.body.style.fontFamily = "sans";
  document.body.style.padding = "30px";
  document.body.style.margin = "2em";
  document.body.style.color="orange";
  document.body.style.fontSize = "20px";
  document.body.style.fontWeight = "bold";

  // setTimeout(() => {
    // document.body.style.visibility = 'hidden';
  // }, 10000);

  setInterval(() => {
    if (document.body.style.visibility === 'visible') {
      document.body.style.visibility = 'hidden';
    } else {
      document.body.style.visibility = 'visible';
    }
  }, 1000);
}
