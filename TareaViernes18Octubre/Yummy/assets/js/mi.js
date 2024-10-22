window.onload = inicio;
function inicio() {
  const url = "getPlatos.php.json";
  //ir a por los datos
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((menuData) => displayMenu(menuData))
    .catch((error = alert(error)));
}

function displayMenu(menuData) {
  const menuContainer = document.getElementById("menu");
  const menuContent = document.createElement("div");
  menuContent.classList.add("container");

  menuData.forEach((dish) => {
    const dishDiv = document.createElement("div");
    dishDiv.className = "col-lg-4 menu-item";
    dishDiv.innerHTML = `
            <img src="${dish.imagen}" class="menu-img img-fluid" alt="${dish.nombre}">
            <h4>${dish.nombre}</h4>
            <p class="ingredients">${dish.ingredientes}</p>
            <p class="price">$${dish.precio}</p>
        `;
    menuContent.appendChild(dishDiv);
  });

  menuContainer.appendChild(menuContent);
}
