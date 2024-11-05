// 1. length: El atributo length almacena el número de elementos del vector
// 2. push(): El método push() añade uno o más elementos al final del vector
// const alumnos = [
//   { nombre: "Lola", nota: 9 },
//   { nombre: "Lolo", nota: 5 },
// ];
// alumnos.push(
//   { nombre: "Petra", nota: 10 },

//   { nombre: "Paco", nota: 5 }
// );
// console.log("vector Completo: ", alumnos);
// console.log("longitud: ", alumnos.length);

// let vector1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Vector Completo: ", vector1);
// console.log("longitud Vector Completo: ", vector1.length);
// let ultimoElemento = vector1.pop();
// console.log("elemento borrado: ", ultimoElemento);
// console.log("Vector Actualizado: ", vector1);
// console.log("longitud Vector Actualizado: ", vector1.length);
// const arboles = [
//   { nombre: "encina", altura: 10 },
//   { nombre: "chopo", altura: 30 },
// ];
// arboles.forEach(elemento=>{
//     alert(elemento.nombre);
// });
// alert("arboles: " + arboles, "arboles.length: " + arboles.length);
// // console.log("arboles: ", arboles);
// // console.log("arboles.length: ", arboles.length);
// // añade alcornoque al principio del array y push añade al final
// arboles.unshift({ nombre: "alcornoque", altura: 20 });
// console.log("Vector arbol final: ", arboles);
// let vector2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// vector2.shift();
// console.log("vector2 final: ", vector2);
// const vector1 = [1, 2, 3];
// const vector2 = [4, 5, 6];
// const vector3 = [7, 8, 9];
// let numero = 1;
// const vectorTotal = vector1.concat(vector2, vector3, numero);
// console.log("vectorTotalMaximo: ", Math.max(...vectorTotal));
// console.log("vectorTotalMinimo: ", Math.min(...vectorTotal));
// const vector1 = [1, 2, 3, 4, 5];
// const vector2 = vector1.slice(0, 3);
// const vector3 = vector1.slice(3, 5);
// console.log("vector2: ", vector2);
// console.log("vector1: ", vector1);
// console.log("vector3: ", vector3);
// const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// vector.splice(5, 3, 99, 99, 99, 99, 99);
// console.log("vector: ", vector);
// const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// vector.fill(20, 2, 5);
// console.log("vector: ", vector);
// const vector = ["petra", "pili", "manuel"];
// const cadena = vector.join(";");
// console.log("VectorNombres: ", cadena);
const vector = [1, 2, 3, 4, 5];
const letras = ["c", "k", "b", "d", "a"];
vector.reverse();
letras.sort();
console.log("vectorNumero: ", vector.reverse());
console.log("vectorLetras: ", letras.sort());
console.log("vectorNumeroInverso: ", vector.sort().reverse());
console.log("vectorLetrasInverso: ", letras.sort().reverse());
// Para una ordenación numérica hay que pasar una función

const vector2 = [6, 3, 1, 4, 9];
console.log("vector2: ", vector2);
console.log(
  "vector2 Ordenado: ",
  vector2.sort((a, b) => a - b)
);
// se puede ordenar por una características de los elementos del array (por ejemplo la longitud)
const nombres = ["petronilo", "filiberto", "marianela", "basiliano"];
console.log(
  "Nombres",
  nombres.sort((a, b) => a.length - b.length)
);
// se puede ordenar por un atributo si se trata de un vector de objetos
const fruta = [
  { nombre: "naranja", precio: 4, stock: 6300 },
  { nombre: "manzanas", precio: 2, stock: 2300 },
  { nombre: "kiwi", precio: 3, stock: 1300 },
];
const listadoPorPrecio = fruta.sort((a, b) => a.precio - b.precio);
const listadoPorStock = fruta.sort((a, b) => a.stock - b.stock);
const listadoPorPrecioReverso = listadoPorPrecio.slice();
const listadoPorStockReverso = listadoPorStock.slice();
console.log("fruta Precio: ", listadoPorPrecio);
console.log("fruta Stock: ", listadoPorStock);
console.log("fruta Precio Inverso: ", listadoPorPrecioReverso.reverse());
console.log("fruta Stock Inverso: ", listadoPorStockReverso.reverse());
// Si no queremos tocar el original y hacer la ordenación en otro vector

const vectorOriginal = [10, 7, 2, 1, 4];
vectorCopia = vectorOriginal.slice().sort((a, b) => a - b);
console.log("vectorCopia: ", vectorCopia);
