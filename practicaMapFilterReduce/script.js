const frutas = [
    { nombre: 'patatas', precio: 3, stock: 500 },
    { nombre: 'manzanas', precio: 2, stock: 200 },
    { nombre: 'peras', precio: 1, stock: 100 },
    { nombre: 'plátanos', precio: 1.5, stock: 0 },
    { nombre: 'uvas', precio: 4, stock: 150 },
    { nombre: 'naranjas', precio: 2.5, stock: 250 },
    { nombre: 'piñas', precio: 5, stock: 0 },
    { nombre: 'kiwis', precio: 3.5, stock: 120 },
    { nombre: 'fresas', precio: 6, stock: 90 },
    { nombre: 'mangos', precio: 4.5, stock: 75 }
];


//solo el listado de los nombres (map): 10
const nombres = frutas.map(fruta => fruta.nombre);
console.log("nombres", nombres);

//listado de frutas sin existencias (filter) : 2
const sinExistencias = frutas.filter(fruta => fruta.stock === 0);
console.log("sinExistencias", sinExistencias);

//suma total del stock (reduce) :1485
const totalStock = frutas.reduce((acc, fruta) => acc + fruta.stock, 0);
console.log("totalStock", totalStock);

//media de precios (recduce): 3.3 . Primero el total de medio y luego 
//divides entre frutas.length
const totalPrecio1 = frutas.reduce((acc, fruta) => acc + fruta.precio, 0);
const mediaPrecio1 = totalPrecio1 / frutas.length;
console.log("mediaPrecio", mediaPrecio1);

//productos cuyo precio está por encima de la media (5)
// 1. Calcular la media de precios con reduce
const totalPrecio2 = frutas.reduce((acc, fruta) => acc + fruta.precio, 0);
const mediaPrecio2 = totalPrecio2 / frutas.length;
console.log("mediaPrecioReduce", mediaPrecio2);

// 2. Filtrar los productos que están por encima de la media 

const encimaMedia = frutas.filter(fruta => fruta.precio > mediaPrecio2);
console.log("encimaMedia", encimaMedia);

//productos cuyo stock está por debajo de la media
// 1. Calcular la media del stock con reduce
const Stock = frutas.reduce((acc, fruta) => acc + fruta.stock, 0);
const mediaStock = Stock / frutas.length;
console.log("mediaStock", mediaStock);
// 2. Filtrar las frutas con stock por debajo de la media (148.5) filter
const stockDebajoMedia = frutas.filter(fruta => fruta.stock < mediaStock);
console.log("stockDebajoMedia", stockDebajoMedia);

// nombre de frutas cuyo precio es mayor o igual a 5 euros (piña,fresa)  filter y map
const frutasMasCinco = frutas.filter(fruta => fruta.precio >= 5);
console.log("Frutas + 5€ ",frutasMasCinco.map(fruta => fruta.nombre).join(', '));
