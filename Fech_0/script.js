//url del fichero json donde vamos a obtener los datos
const url = "http://camacho.atwebpages.com/webcam/getWebcam.php";

//aqui va estar el contenedor donde se muestra los datos
const ubicacion = document.querySelector("#fila");

//realizamos la  solicitud
fetch(url)
  .then((response) => response.json())
  .then((data) => mostrar(data))
  .finally(() => console.log("fin"))
  .catch((error) => console.log(error));

function mostrar(datos) {
  datos.forEach((webc) => {
    const columna = document.createElement("div");
    columna.className = "col-lg-4";
    ubicacion.appendChild(columna);

    //<div class="card">
    const tarjeta = document.createElement("div");
    tarjeta.className = "card";
    columna.appendChild(tarjeta);

    // <img class="card-img-top" src="holder.js/100x180/" alt=""> asi se crearia en js
    const videoW = document.createElement("video");
    videoW.setAttribute("src", webc.url, "autoplay loop");

    tarjeta.appendChild(videoW);

    //<div class="card-body">
    const CarBoy = document.createElement("div");
    CarBoy.className = "card-body";
    tarjeta.appendChild(CarBoy);

    //<h4 class="card-title">Title</h4>
    const titulo = document.createElement("h4");
    titulo.className = "card-title";
    titulo.textContent = webc.lugar;
    CarBoy.appendChild(titulo);

    //<p class="card-text">Text</p>
    const subtutitulo = document.createElement("p");
    subtutitulo.className = "card-text";
    subtutitulo.textContent = webc.tiempo;
    CarBoy.appendChild(subtutitulo);
  });
}
