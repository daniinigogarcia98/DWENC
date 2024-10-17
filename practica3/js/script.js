window.onload = inicio;
const url = "json/getImagenes.json";

function inicio() {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => cargar(datos))
    .catch((error) => alert(error));
}

function cargar(datos) {
  datos.forEach(mostrarDatos);

  function mostrarDatos(item) {
    if (item.activo === "1") {
      const card = document.createElement("div");
      card.className = "col";

      card.innerHTML =
        '<div class="card">' +
        '<img src="' +
        item.imagen +
        '" alt="' +
        item.texto +
        '">' +
        '<div class="info">' +
        "<h5>" +
        item.texto +
        "</h5>" +
        "<p>" +
        item.subtexto +
        "</p>" +
        '<button class="btn btn-primary" onclick="viewImage(\'' +
        item.id +
        "')\">View</button>" +
        '<button class="btn btn-secondary" onclick="editImage(\'' +
        item.id +
        "')\">Edit</button>" +
        "</div>" +
        "</div>";

      document.getElementById("cajaX").appendChild(card);
    }
  }
}

function viewImage(id) {
  alert("View image with ID: " + id);
}

function editImage(id) {
  alert("Edit image with ID: " + id);
}
