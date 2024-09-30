//creamos el contenedor padre
let contenedor=document.createElement("div");
contenedor.className="container";
//Agregamos  el contenedor al body
document.body.appendChild(contenedor);
// Agregamos un elemento fieldset
let rotulo = document.createElement("fieldset");
contenedor.appendChild(rotulo);
//creamos el contenedor hijo
let galeria=document.createElement("div");
galeria.className="gallery";
contenedor.appendChild(galeria);
rotulo.appendChild(galeria);
let legenda = document.createElement("legend");
legenda.textContent = "Practica imágenes";
rotulo.appendChild(legenda);

 function generarAleatorio(){
    return Math.floor(Math.random()*7)+1;
    }
    //creamos 40 imagenes aleatorias
    for (let i = 0; i < 40; i++) {
        let imagen = document.createElement("img");
        imagen.src = "https://randomuser.me/api/portraits/men/" + generarAleatorio() + ".jpg";
        imagen.className = "";
        //Agregaremos  el evento click a la imagen
        imagen.addEventListener("click",function(){
        imagen.className="ponerBorde";
        });
        //Agregaremos la imagenes a la galeria
        galeria.appendChild(imagen);
    }