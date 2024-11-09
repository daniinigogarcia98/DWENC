// Declaración de arrays para trabajar con ellos
const vector1 = [2, 5, 2, 4, 6, 8, 9, 6];  // Array de números
const vector2 = ["paco", "lola", "pedro"];  // Array de nombres
const vector3 = [  // Array de objetos (películas)
  { titulo: 'Los lunes al sol', minutos: 120 },
  { titulo: 'La delgada línea roja', minutos: 120 },
  { titulo: "Bienvenido MrMarsall", minutos: 93 }
];

// Función que se ejecuta al cargar el documento
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnaniadirN").addEventListener("click", () => {
    let numero = prompt("Introduce un número para añadir:");
    if (numero===null || numero==="") {
      alert("!El numero no puede ser nulo y tampoco en blanco¡ Vuelve a introducir los datos");
      console.log(vector1);
      return;
    }
    else{
      vector1.push(numero);
      alert("Número añadido: " + numero);
      console.log(vector1);
    }
  });
  document.getElementById("btnaniadirB").addEventListener("click", () => {
    let nombre = prompt("Introduce un nombre:");
    if (nombre===null || nombre==="") {
      alert("!No puede ser null o en blanco¡ Vuelve a introducir los datos");
      console.log(vector2);
      return;
    }
    else{
      vector2.push(nombre);
      alert("Nombre añadido: " + nombre);
      console.log(vector2);
    }
  });
  document.getElementById("btnaniadirP").addEventListener("click", () => {
    let titulo = prompt("Introduce el título de la película:");
    let minutos = prompt("Introduce los minutos de duración:");

    // Verificamos si alguno de los campos está vacío
    if (titulo === "" || minutos === "") {
        alert("¡NO PUEDES DEJAR EN BLANCO LOS CAMPOS! Vuelve a introducir los datos.");
        console.log(vector3);
        return;
    }

    minutos = Number(minutos);

    // Verificamos si los minutos son un números válidos
    if (isNaN(minutos) || minutos <= 0) {
        alert("¡El valor de los minutos debe ser un número mayor que cero! Vuelve a introducir los datos.");
        console.log(vector3);
        return;
    }
    // agregamos la película al array
    alert("Película añadida: " + titulo + " con duración de " + minutos + " minutos.");
    vector3.push({ titulo: titulo, minutos: minutos });
    console.log(vector3);
    
});

  document.getElementById("btnEliminarN").addEventListener("click", () => {
    let eliminado = vector1.pop();
    alert("Número eliminado: " + eliminado);
    console.log(vector1);
  });
  document.getElementById("btnAniadirU").addEventListener("click", () => {
    let valor = prompt("Introduce un valor:");
    if (valor===null || valor==="") {
      alert("!El valor no puede ser nulo y tampoco en blanco¡ Vuelve a introducir los datos");
      console.log(vector1);
      return;
    }
    else{
      vector1.unshift(valor);
      alert("Valor añadido: " + valor);
      console.log(vector1);
    }
  });
  document.getElementById("btnEliminarS").addEventListener("click", () => {
    let eliminado = vector1.shift();
    alert("Elemento eliminado al principio: " + eliminado);
    console.log(vector1);
  });
  document.getElementById("btnSlice").addEventListener("click", () => {
    let inicio = parseInt(prompt("Índica el inicio del Vector:"));
    let fin = parseInt(prompt("Índica el final del Vector:"));
    if (isNaN(inicio) || isNaN(fin)) {
      alert("!No puedes introducir letras o dejar en blanco los campos¡ Vuelve a introducir los datos");
      console.log(vector1);
      return;
      }
    else{
      let copia = vector1.slice(inicio, fin);
      alert("Copia del array: " + copia);
      console.log(copia);
    }
  });
  document.getElementById("btnJoin").addEventListener("click", () => {
    let separador = prompt("Introduce un separador para unir los elementos:");
    let resultado = vector1.join(separador);
    if (separador==="" || separador===null) {
      alert("!Debes de introducir un separador¡ Vuelve a introducir los datos");
      console.log(vector1);
      return;
    }
    else{
      alert("Resultado con separador: " + resultado);
      console.log(resultado);
    }
  });
  document.getElementById("btnIncludes").addEventListener("click", () => {
    let valor = prompt("Introduce el valor a buscar en el array:");

    // Verificamos que el usuario no ingresó nada o cancelo la operación
    if (valor === null || valor === "") {
        alert("No has introducido ningún valor. Por favor, ingresa un número.");
        return;
    }

    // Convertimos el valor a numero
    valor = Number(valor);

    // Verificamos si el valor es un número válido no se puede introducir letras o caracteres
    if (isNaN(valor)) {
      //imprimos al usuario un error y le advierte de vuelve a intentar
        alert("¡El valor introducido no es un número! Vuelve a introducir los datos.");
        console.log(vector1); // Solo lo muestra si el valor no es numérico
        return;
    }

    // Verificamos si el número está en el array vector1
    let buscar = vector1.includes(valor);

    // Mostramos al usuario si el valor está o no en el array
    alert(buscar ? "El valor " + valor + " está en el array." : "El valor " + valor + " NO está en el array.");
    //Mostramos el resultado en la consola tambien
    console.log(buscar);
});
document.getElementById("btnSort").addEventListener("click", () => {
  vector1.sort();
  alert("Vector1 ordenado:"+"\n"+vector1);
  console.log(vector1);
});
document.getElementById("btnReverse").addEventListener("click", () => {
  vector1.reverse();
  alert("Vector1 invertido:"+"\n"+vector1);
  console.log(vector1);
});
document.getElementById("btnMap").addEventListener("click", () => {
  let numero = prompt("Introduce un número para multiplicar los elementos del vector1:");

  // Verificamos que el valor introducido no sea null ni esté vacío
  if (numero === null || numero === "") {
    alert("¡No puedes dejar el campo vacío o presionar 'Cancelar'! Intentalo de nuevo.");
    return;
  }
  numero = Number(numero);
  // Verificamos que el valor introducido sea un número válido
  if (isNaN(numero) || numero == 0 || numero < 0) {
    alert("¡El numero 0 no puede ser multiplicado tampoco los números negativos ni caracteres! Vuelve a introducir los datos.");
    return;
  }
  // Multiplicamos todos los elementos del array por el número introducido
  let vectorMap = vector1.map(num => num * numero);
  //primero mostramos el vector original
  alert("Vector1 original:"+"\n"+vector1);
  //mostramos el vector multiplicado
  alert("Vector1 multiplicado por " + numero + ":"+"\n"+vectorMap);
  console.log(vectorMap);
});
document.getElementById("btnReduce").addEventListener("click", () => {
  let sumaTotal = vector1.reduce((acumulador, numeroSuma) => acumulador + numeroSuma, 0);
  //Mostramos el resultado
  alert("La suma Total del vector1 es: " + sumaTotal);
  console.log(sumaTotal);
});
document.getElementById("btnReduce2").addEventListener("click", () => {
  let numeroSuma = prompt("Introduce un número para sumar a los elementos del vector1:");
  
  // Verificamos que el valor introducido no sea null ni esté vacío
  if (numeroSuma === null || numeroSuma === "") {
    alert("¡No puedes dejar el campo vacío o presionar 'Cancelar'! Inténtalo de nuevo.");
    return;
  }

  numeroSuma = Number(numeroSuma);
  
  // Verificamos que el valor introducido sea un número válido
  if (isNaN(numeroSuma) || numeroSuma <= 0) {
    alert("¡El número debe ser mayor que 0! Vuelve a introducir los datos.");
    return;
  }

  let sumaTotal = vector1.reduce((acumulador, numero) => acumulador + (numero + numeroSuma), 0);

  alert("La suma Total del Vector1: "+"\n"+vector1+"\n"+"\n"+"con el numero: " + numeroSuma + " es: " + sumaTotal);
  console.log(sumaTotal);
});
document.getElementById("btnFilter").addEventListener("click", () => {
  // Le pedimos al usuario que introduzca un número
  let numeroFiltro = prompt("Introduce un número para filtrar los elementos mayores que este:");
  // Verificamos que el valor introducido no sea null ni esté vacío
  if (numeroFiltro === null || numeroFiltro === "") {
    alert("¡No puedes dejar el campo vacío o presionar 'Cancelar'! Inténtalo de nuevo.");
    return;
  }
  numeroFiltro = Number(numeroFiltro);
  // Verificamos que el valor introducido sea un número válido
  if (isNaN(numeroFiltro)) {
    alert("¡Debes introducir un número válido! Vuelve a intentarlo.");
    return;
  }
  // Filtramos los elementos de vector1
  let filtrar = vector1.filter(num => num > numeroFiltro);
  // Verificamos si hay elementos filtrados
  if (filtrar.length === 0) {
    alert("No hay elementos mayores que " + numeroFiltro + " en el vector.");
  } else {
    alert("Elementos filtrados: " + filtrar.join(", "));
  }
  console.log(filtrar);
});
document.getElementById("btnSome").addEventListener("click", () => {
  // Verificamos si hay algún número mayor a 7
  let filtrar = vector1.filter(num => num > 7);
  // Verificamos si hay algún número mayor a 7 
  let existe = vector1.some(num => num > 7);
  alert("Existe un número mayor a 7: " + existe + "\n" + "Elementos mayores a 7: " + filtrar.join(", "));
  console.log(existe);
  console.log(filtrar);
});
document.getElementById("btnEvery").addEventListener("click", () => {
  let todos = vector1.every(num => num > 0);
  // Verificamos si todos los números son positivos
  if (todos) {
    alert("Todos los números son positivos");
  }
  // Verificamos si no todos los números son positivos
  else {
    alert("No todos los números son positivos");
  }
  console.log(todos);
});
document.getElementById("btnFind").addEventListener("click", () => {
  let numeroBuscar = prompt("Introduce un número para buscarlo en el vector1:");
  // Verificamos que el valor introducido no sea null ni esté vacío
  if (numeroBuscar === null || numeroBuscar === "") {
    alert("¡No puedes dejar el campo vacío o presionar 'Cancelar'! Inténtalo de nuevo.");
    return;
  }
  numeroBuscar = Number(numeroBuscar);
  // Verificamos que el valor introducido sea un número válido
  if (isNaN(numeroBuscar)) {
    alert("¡Debes introducir un número válido! Vuelve a intentarlo.");
    return;
  }
  // Buscamos el número en el array
  let numeroEncotrado = vector1.find(num => num === numeroBuscar);
  // Verificamos si el número se encuentra en el array
  if (numeroEncotrado === undefined || numeroEncotrado === null) {
    alert("El número " + numeroBuscar + " no se encuentra en el vector.");
  } else {
    alert("El número " + numeroBuscar + " se encuentra en el vector en la posición " + numeroEncotrado + ".");
  }
  console.log(numeroEncotrado);
});
document.getElementById("btnKeys").addEventListener("click", () => {
  let vectorKeys = Object.keys(vector1);
  alert("Vector1 original:"+"\n"+vector1);
  alert("Vector1 con las posiciones:"+"\n"+vectorKeys);
  console.log(vectorKeys);
});
document.getElementById("btnValues").addEventListener("click", () => {
  let valores = Object.values(vector1);
  alert("Valores del vector1:"+"\n"+valores);
  console.log(valores);
});
document.getElementById("btnEntry").addEventListener("click", () => {
  let entradas = Object.entries(vector1);
  alert("Vector1 con las entradas:"+"\n"+entradas);
  console.log(entradas);
});
});