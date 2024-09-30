// Pedimos al usuario que introduzca su nombre
let jugador = prompt("Bienvenido al Juego de los Simpson, ¿Quién eres?");
let nombreJugador = jugador; // Asignamos el valor de jugador a nombreJugador

// Mostramos al usuario su nombre en pantalla
document.write("<h1>Bienvenido " + nombreJugador + "</h1>");

// Se agrega un evento de carga al botón inicio
window.addEventListener("load", inicio);

function inicio() {
    // Añadimos la variable del tiempo del juego
    var juegoTiempo;
    // Identificamos el botón inicio (clase button en el html)
    const botonInicio = document.querySelector("#iniciar");
    botonInicio.addEventListener("click", JuegoComienzo);
    botonInicio.className = "botonInicio";

    // Añadimos el contenedor que contiene todas las imágenes
    const contenedorImagenes = document.querySelector(".gallery");
    // Añadimos el contenedor que contiene las imágenes de Muestra
    const contenedorMuestra = document.querySelector(".claseMuestra");
    const panelPuntos = document.querySelector("#puntos");
    panelPuntos.style.fontSize = "45px";
    const panelTiempo = document.querySelector("#cuentaAtras");
    panelTiempo.style.fontSize = "45px";

    // Declaramos las variables necesarias puntos, segundo, y Al
    var puntos = 0;
    var segundo = 30;
    var Al;

    // Añadimos la función que iniciará el juego
    function JuegoComienzo() {
        contTiempo();
        Al = cargarMuestrasImg();
        // Cada 2 segundos cambiamos las imágenes
        cargoImagenes();
        // Establecemos el Temporizador del juego
        juegoTiempo = setInterval(cargoImagenes, 6000);
        botonInicio.setAttribute("disabled", true);
    }

    // Cargamos al Panel 20 imágenes
    function cargoImagenes() {
        // Función que resetea el contenido de la caja
        // Cada 2 segundos
        limpioCaja();
        for (let i = 0; i < 10; i++) {
            // Creamos la etiqueta para imagen (img)
            let imagen = document.createElement("img");
            // Creamos el Texto que Contiene la imagen (si estaindicado en un array si no código muerto)
            let textoimagen = document.createElement("span");
            // Indicamos una variable x con math floor para que nos muestre 20 imágenes aleatorias
            let x = Math.floor(Math.random() * 20);
            // Dotamos de atributo la etiqueta img con setattribute (importante utilizar la extension
            // de imagen correcta si esta en Mayúscula o minúscula:.gif->.GIF,.png->.PNG o .jpg->.JPG
            imagen.setAttribute("src", 'img/' + x + '.JPG');
            // Le añadimos nombre a la imagen con classname
            imagen.className = "gallery img";
            // Lo añadimos a la caja(div) padre
            contenedorImagenes.appendChild(imagen);

            // Le agregamos un evento click a la imagen
            imagen.addEventListener("click", () => {
                // Se verifica si el usuario acertó
                if (Al == x) {
                    puntos++;
                    // Incrementamos 1 segundo en el temporizador por cada acierto
                    segundo++;
                    imagen.style.display = 'none';
                } else {
                    // Si el usuario no acertó se le resta 1 segundo
                    segundo--;
                    imagen.style.display = 'none';
                    // Si el usuario no acertó se le restan 1 punto
                    puntos--;
                    // Verificamos si el usuario ha fallado 5 veces
                    if (puntos <= -5) {
                        // Paramos el juego y mostramos el mensaje de juego finalizado
                        clearInterval(tiempo);
                        clearInterval(juegoTiempo);
                        alert('Fin de Partida ' + nombreJugador);
                    }
                }
                panelPuntos.innerText = "Puntos " + puntos;
            });
        }
    }

    // Añadimos la función limpioCaja
    function limpioCaja() {
        while (contenedorImagenes.firstChild) {
            contenedorImagenes.removeChild(contenedorImagenes.firstChild);
        }
    }

    // Cargamos la imagen de muestra con la función cargarMuestrasImg

    function cargarMuestrasImg() {
        // Creamos la etiqueta para imagen (img)
        const muestraImg = document.createElement("img");
        // Indicamos una variable numRandom con math floor para que nos muestre 20 imágenes aleatorias
        let numRandom = Math.floor(Math.random() * 20);
        // Dotamos de atributo la etiqueta img con setattribute (importante utilizar la extension
        // de imagen correcta si esta en Mayúscula o minúscula:.
        muestraImg.setAttribute("src", 'img/' + numRandom + '.JPG');
        // Ubicamos la imagen en la caja(div)
        contenedorMuestra.appendChild(muestraImg);
        return numRandom;
    }

    // Creamos la función contTiempo
    function contTiempo() {
        // Creamos un temporizador con setinterval
        tiempo = setInterval(cuentaRegresiva, 1000);
        // Creamos la función cuentaRegresiva
        function cuentaRegresiva() {
            // Creamos un contador que se decrementa en 1 segundo
            segundo--;
            panelTiempo.innerText = "Tiempo " + segundo;
            // Agregamos una animación para mostrar el tiempo restante
            if (segundo <= 10) {
                panelTiempo.style.color = "red";
            }
            if (segundo == 0) {
                // Si acaba el tiempo Reseteamos todo, desactivamos el botón inicio
                botonInicio.disabled = false;
                clearInterval(tiempo);
                clearInterval(juegoTiempo);
                limpioCaja();
                segundo = 30;
                puntos = 0;
                panelPuntos.innerText = "Puntos " + puntos;
                panelTiempo.innerText = "Tiempo " + segundo;
                // Borramos la imagen de muestra
                const imagenBorrar = contenedorMuestra.querySelector("img");
                contenedorMuestra.removeChild(imagenBorrar);
                console.log("fin de linea");
            }
        }
    }
}