// creamos una variable para almacenar la tabla
let tabla = null;

// se le agrega un evento click al boton cargar tablas
document.getElementById("btnTablas").addEventListener("click", crearTablas);

// se le agrega un evento click al boton cargar imagenes modificandolo para mostrar colores aleatorios
document.getElementById("btnColores").addEventListener("click", crearTablaConColores);

// creamos una funcion para crear una tabla
function crearTablas() {
    // le pedimos al usuario que inggrese el numero de filas y columnas
    let filas = prompt("Dime,¿cuantas filas quieres?");
    let columnas = prompt("Dime,¿cuantas columnas quieres?");
    //luego creamos una tabla y le asignamos el borde 
    tabla = document.createElement("table");
    tabla.style.border = "2px solid black";
    //creo un bucle para crear las filas y columnas
    for (let i = 0; i < filas; i++) {
        let fila = tabla.insertRow();
        for (let j = 0; j < columnas; j++) {
          let celda = fila.insertCell();
          let boton = document.createElement("button");
          let colores = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"];
          let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
          //añadimos una variable con el texto de los colores
          let coloresTexto = {

            "red": "rojo",
    
            "green": "verde",
    
            "blue": "azul",
    
            "yellow": "amarillo",
    
            "orange": "naranja",
    
            "purple": "púrpura",
    
            "black": "negro",
    
            "white": "blanco"
    
          };
    
          boton.style.backgroundColor = colorAleatorio;
          boton.style.backgroundColor = colorAleatorio;
          // Establecemos un ancho mínimo de 100px
          boton.style.width = "100px";
          // Establecemos un alto mínimo de 50px
          boton.style.height = "50px";
          // Establecemos el tamaño de fuente a 24px
          boton.style.fontSize = "24px";
          // Establecemos el texto del botón vacío
          boton.innerHTML = "";
          //Este alert nos saber el color del fondo 
          boton.addEventListener("click", function () {
            alert('El color del fondo es: ' + coloresTexto[colorAleatorio]);
          });
          //agrego el boton a la celda
          celda.appendChild(boton);
        }
      }
      // agrego la tabla al body
      document.body.appendChild(tabla);
}

// creamos una funcion para crear una tabla con colores aleatorios
function crearTablaConColores() {
    //verificamos que la tabla exista
    if (tabla == null) {
        alert("no existe tabla");
        return;
    }
    //creamos un array con los colores que queremos
    let colores = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"];
    //creamos un bucle sobre las celdas de la tabla
    for (let i = 0; i < tabla.rows.length; i++) {
        for (let j = 0; j < tabla.rows[i].cells.length; j++) {
            let celda = tabla.rows[i].cells[j];
            let boton = celda.firstChild;
            let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
            boton.style.backgroundColor = colorAleatorio;
        }
    }
}