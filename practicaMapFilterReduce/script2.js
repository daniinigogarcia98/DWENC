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

document.getElementById('solo-nombre').addEventListener('click', () => {
    const nombres = frutas.map(fruta => fruta.nombre);
    alert(nombres.join(', '));
});

document.getElementById('filtro-existencias').addEventListener('click', () => {
    const sinExistencias = frutas.filter(fruta => fruta.stock === 0);
    alert(sinExistencias.map(fruta => fruta.nombre).join(', '));
});

document.getElementById('suma-stock').addEventListener('click', () => {
    const totalStock = frutas.reduce((acc, fruta) => acc + fruta.stock, 0);
    alert(`Suma total del stock: ${totalStock}`);
});

document.getElementById('media-precios').addEventListener('click', () => {
    const totalPrecio = frutas.reduce((acc, fruta) => acc + fruta.precio, 0);
    const mediaPrecio = totalPrecio / frutas.length;
    alert(`Media de precios: ${mediaPrecio.toFixed(2)}`);
});

document.getElementById('productos-encima-media').addEventListener('click', () => {
    const totalPrecio = frutas.reduce((acc, fruta) => acc + fruta.precio, 0);
    const mediaPrecio = totalPrecio / frutas.length;
    const encimaMedia = frutas.filter(fruta => fruta.precio > mediaPrecio);
    alert(encimaMedia.map(fruta => fruta.nombre).join(', '));
});

document.getElementById('productos-stock-debajo-media').addEventListener('click', () => {
    const totalStock = frutas.reduce((acc, fruta) => acc + fruta.stock, 0);
    const mediaStock = totalStock / frutas.length;
    const stockDebajoMedia = frutas.filter(fruta => fruta.stock < mediaStock);
    alert(stockDebajoMedia.map(fruta => fruta.nombre).join(', '));
});

document.getElementById('nombre-FrutasMasMenos-euros').addEventListener('click', () => {
    const frutasMasCinco = frutas.filter(fruta => fruta.precio >= 5);
    alert(frutasMasCinco.map(fruta => fruta.nombre).join(', '));
});