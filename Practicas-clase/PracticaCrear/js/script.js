window.addEventListener("load", inicio);
function inicio() {
  const cuerpo = document.body;
  console.log("cuerpo" + cuerpo);
  //creamos el primer contenedor
  const divPrncipal = document.createElement("div");
  //creamos el segundo contenedor
  const divSecundario = document.createElement("div");
  divPrncipal.className = "contenedorPrincipal";
  divPrncipal.textContent = "Estoy en el contenedor principal";
  divSecundario.className = "contenedorsecundario";
  divSecundario.textContent = "Estoy en el contenedor Secundario";
  cuerpo.appendChild(divPrncipal);
  divPrncipal.appendChild(divSecundario);
  //creamos un nuevo boton
  const listaBotones = ["Boton1", "Boton2", "Boton3", "Boton4","Boton5","Boton6","Boton7","Boton8"];
  //item es cada elemeto array
  listaBotones.forEach((item, indice) => {
    //crear boton total botones listabotones.length
    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = item;
    nuevoBoton.className = "botonx";
    divSecundario.appendChild(nuevoBoton);
    nuevoBoton.addEventListener("click",()=>{
        console.log("evento"+item)
        //crear una imagen por cada evento clic
        const imagenX = document.createElement("img");
        //añadir al atributo src de la etiqueta img un valor
        let numeroramdom=Math.round(Math.random()*20);
        if(indice%2==0){

            imagenX.setAttribute("src","https://randomuser.me/api/portraits/men/"+numeroramdom+".jpg");
            }else{
                imagenX.setAttribute("src","https://randomuser.me/api/portraits/women/"+numeroramdom+".jpg");
            }
            divSecundario.appendChild(imagenX);
    })
  });
}
