window.addEventListener("load", inicio);

function inicio() {
  eliminarPlantilla();
  eliminarSeccionChefs();

  const urlPlatos = "json/getPlatos.php.json";
  const urlCocineros = "json/getCocinero.php.json"; // Asegúrate de que esta URL sea correcta

  // Cargar platos
  fetch(urlPlatos)
    .then((respuesta) => respuesta.json())
    .then((platos) => cargarMenu(platos))
    .catch((error) => console.error("Error al cargar los platos:", error));

  // Cargar cocineros
  fetch(urlCocineros)
    .then((response) => response.json())
    .then((cocineros) => cargarCocina(cocineros)) // Llama a la función correcta
    .catch((error) => console.error("Error al cargar los cocineros:", error));
}

function cargarMenu(platos) {
  const contenedorPadre = document.querySelector("#menu .container");

  const seccionMenu = document.createElement("div");
  seccionMenu.classList.add("menu-items");

  platos.forEach((plato) => {
    const card = document.createElement("div");
    card.classList.add("menu-item");

    card.innerHTML = `
      <img src="${plato.imagen}" class="menu-img img-fluid" alt="${plato.nombre}" />
      <h4>${plato.nombre}</h4>
      <p class="ingredientes">${plato.ingredientes}</p>
      <p class="precio">€${plato.precio}</p>
    `;

    seccionMenu.appendChild(card);
    console.log(plato.nombre); // Para depuración
  });

  // Agregar la nueva sección del menú al contenedor padre
  contenedorPadre.appendChild(seccionMenu);
}

function eliminarPlantilla() {
  // Seleccionamos todos los elementos con clase "menu-item" y los eliminamos
  const seccionMenu = document.querySelectorAll("#menu .menu-item");
  seccionMenu.forEach((menu) => menu.remove());
}

function eliminarSeccionChefs() {
  const seccionChefs = document.querySelector("#chefs"); // Seleccionamos la sección de chefs

  if (seccionChefs) {
    seccionChefs.remove(); // Eliminamos la sección del DOM
  }
}

function cargarCocina(cocineros) {
  const contenedorPrincipal = document.querySelector("main");
  const nuevaSeccion = document.createElement("section");
  nuevaSeccion.id = "chefs";
  nuevaSeccion.classList.add("chefs", "section-bg");
  nuevaSeccion.innerHTML = `
    <div class="container" data-aos="fade-up">
      <div class="section-header">
        <h2>Chefs</h2>
        <p>Nuestros <span>Profesionales</span></p>
      </div>
      <div class="row gy-4"></div>
    </div>
  `;

  const contenedorChefs = nuevaSeccion.querySelector(".row");
  cocineros.forEach((chef) => {
    const chefCard = document.createElement("div");
    chefCard.classList.add(
      "col-lg-4",
      "col-md-6",
      "d-flex",
      "align-items-stretch"
    );

    chefCard.innerHTML = `
      <div class="chef-member">
        <div class="member-img">
          <img src="${chef.imagen}" class="img-fluid" alt="${chef.nombre}" />
          <div class="social">
            <a href=""><i class="bi bi-twitter"></i></a>
            <a href=""><i class="bi bi-facebook"></i></a>
            <a href=""><i class="bi bi-instagram"></i></a>
            <a href=""><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>${chef.nombre}</h4>
          <span>${chef.funcion}</span>
          <p>${chef.descripcion}</p>
        </div>
      </div>
    `;

    contenedorChefs.appendChild(chefCard);
  });

  contenedorPrincipal.appendChild(nuevaSeccion);
}
