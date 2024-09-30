//seccionamos los elementos container y gallery
const divContainer = document.querySelector(".container");
const divGallery = document.querySelector(".gallery");
//creamos un div secundario para los botones
const divSecundario = document.createElement("div");
//asignamos la clase gallery al div gallery
divGallery.className = "gallery";
//asignamos la clase gallery al divcontainer como hijo
divContainer.appendChild(divGallery);
//asignamos la clase gallery al divbotones 
divSecundario.className = "gallery";
//asignamos divbotones como hijo del divcontainer
divContainer.appendChild(divSecundario);

//seleccionamos el boton agregar
const botonAgregar = document.querySelector("#boton-agregar");
//ponemos un contador para contar el numero de botones
let numBotones = 0;
//agregamos un evento click al boton
botonAgregar.addEventListener("click", agregarBoton);
//creamos la funcion para agregar botones
function agregarBoton(){
    //verificamos si se han creado menos de 4 botones
    if(numBotones < 4){
        //incrementamos el numero de botones
        numBotones++;
        //cremos un nuevo boton
        const boton = document.createElement("button");
        //asignamos el texto al boton
        boton.innerText = "Boton " + numBotones;
        boton.className = "boton";
        //agregamos el boton al divgallery
        divGallery.appendChild(boton);
        //agregamos un evento click al boton
        boton.addEventListener("click", botonClick);
    } else {
        //si se han creado 4 botones deshabilitamos el boton
        botonAgregar.disabled = true;
    }
}
//creamos la funcion para el evento click del boton
function botonClick(){
    //generamos un numero aleatorio de imagenes a mostrar
    const numImagen = Math.floor(Math.random() * 10) + 1;
    //creamos un bucle para crear las imagenes
    for(let i = 0; i < numImagen; i++){
        //creamos un nuevo elemento img
        const img = document.createElement("img");
        //generamos un género aleatorio
        let genero="";
        //generamos un numero aleatorio para determinar si es mujer o hombre
        const num = Math.floor(Math.random() * 50) + 1;
        //verificamos si es mujer o hombre
        if(num%2 == 0){
            genero="women";
        }else{
            genero="men";
        }
        //asignamos la imagen al elemento img
         img.setAttribute ("src","https://randomuser.me/api/portraits/" +genero +"/" +num + ".jpg");
         img.className = "";
         //Agregaremos  el evento click a la imagen
         img.addEventListener("click", function(){
             img.className = "ponerBorde";
         });
        //agregamos la imagen al divgallery
        divSecundario.appendChild(img);
 }
}