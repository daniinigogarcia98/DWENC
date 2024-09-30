let botonInicio = document.getElementById("mover");
let colores=['green','orange','red','blue'];
let nombres=['Verde','Naranja','rojo','azul'];
//Inicalizamos el dom
let cuerpo=document.body;

let campoPrincipal=document.createElement("div")
campoPrincipal.className="container"; 
let campoGallery =document.createElement("div")
campoGallery.className="gallery";

botonInicio.addEventListener('click', function() {
    for (let i = 0; i < 20; i++) {
      let caja = document.createElement("div");
      let numRandom = colores[Math.floor(Math.random() * colores.length)];
      caja.style.backgroundColor = numRandom;
      caja.textContent = nombres[colores.indexOf(numRandom)];
      caja.style.paddingBottom = "25px";
      caja.style.fontWeight = "bold";
      caja.style.width = "70px";
      caja.style.height = "70px";
      campoGallery.appendChild(caja);
    }
    cuerpo.appendChild(campoPrincipal)
    campoPrincipal.appendChild(campoGallery); 
  });