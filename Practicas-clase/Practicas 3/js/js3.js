window.addEventListener("load", inicio);

function inicio() {
 const lista=  document.getElementById("semana");
 lista.style.color="blue";
 document.body.style.fontWeight="bold";
 document.body.style.fontSize="30px";
 const sabado  = document.getElementById("itemSabado");
 sabado.style.backgroundColor="green";
 const domingo  = document.getElementById("itemDomingo");
 domingo.style.backgroundColor="red";
 const edad  = document.getElementById("edad");
 edad.style.color="red";
}