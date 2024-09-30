window.addEventListener("load", init);

function init() {
  const body = document.body;
  
  const boton = document.createElement("button");
  const div = document.createElement("div");

  boton.textContent = "Cargar imagenes";
  body.appendChild(boton);
  body.appendChild(div);
  boton.addEventListener("click", () => {
    let numImagenes = parseInt(prompt("Ingresa el numero de imagenes"));
    if (numImagenes < 5 || numImagenes > 50) {
      alert("El numero de imagenes no puede ser  menor de 5 ni superior de 50");
      limpiarContenido();
    } else {
      limpiarContenido();
      while (div.firstChild) {
        div.removeChild(div.firstChild);
      }
      for (let i = 0; i < numImagenes; i++) {
        const imagen = document.createElement("img");

        let numAleatorio = Math.floor(Math.random() * 51);
        let genero = "";
        if (i % 2 == 0) {
          genero = "women";
        } else {
          genero = "men";
        }
        imagen.setAttribute(
          "src","https://randomuser.me/api/portraits/" +genero +"/" +numAleatorio + ".jpg"

        );
        div.appendChild(imagen);
      }
    }
    function limpiarContenido() {
      while (div.firstChild) {
        div.removeChild(div.firstChild);
        }
    }
  });
}
