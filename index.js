//Inicializo arrays

const carrito = [];
const productos = [
  {id: 01, tipo: 'Borcegos', nombre: 'Borcegos Beta', precio: 8990, foto: './img/borcegos1.jpeg'},
  {id: 02, tipo: 'Borcegos', nombre: 'Borcegos Delta', precio: 13890, foto: './img/borcegos2.jpeg'},
  {id: 03, tipo: 'Borcegos', nombre: 'Borcegos Marig', precio: 15890, foto: './img/borcegos3.jpeg'},
  {id: 04, tipo: 'Botas', nombre: 'Botas Winx', precio: 16890, foto: './img/botas4.jpeg'},
  {id: 05, tipo: 'Botas', nombre: 'Botas Skul', precio: 15890, foto: './img/botas5.jpeg'},
  {id: 06, tipo: 'Botas', nombre: 'Botas XXX', precio: 11890, foto: './img/botas6.jpeg'},
  {id: 07, tipo: 'Sandalias', nombre: 'Sandalias Berry', precio: 13890, foto: './img/sandalias7.jpeg'},
  {id: 08, tipo: 'Sandalias', nombre: 'Sandalias Strappy', precio: 13890, foto: './img/sandalias8.jpeg'},
  {id: 09, tipo: 'Sandalias', nombre: 'Sandalias Ava', precio: 14890, foto: './img/sandalias9.jpeg'},
  {id: 10, tipo: 'Texanas', nombre: 'Texanas Wendy', precio: 16890, foto: './img/texanas10.jpeg'},
  {id: 11, tipo: 'Texanas', nombre: 'Texanas Aria', precio: 13890, foto: './img/texanas11.jpeg'},
  {id: 12, tipo: 'Texanas', nombre: 'Texanas Shirp', precio: 13990, foto: './img/texanas12.jpeg'},
  {id: 13, tipo: 'Zapatos', nombre: 'Zapatos Atico Muler', precio: 13290, foto: './img/zapatos13.jpeg'},
  {id: 14, tipo: 'Zapatos', nombre: 'Zapatos Zara Hells', precio: 17890, foto: './img/zapatos14.jpeg'},
  {id: 15, tipo: 'Zapatos', nombre: 'Zapatos Devon Hells', precio: 13690, foto: './img/zapatos15.jpeg'}
];

//Creo la seccion carrito con DOM

let sectionProductos = document.getElementById('section-productos');
let sectionCarrito = document.getElementById('section-carrito');

let totalCompra = document.createElement('div');
totalCompra.innerHTML = '<h2>Total: $</h2>';
sectionCarrito.appendChild(totalCompra);

let montoTotalCompra = document.createElement('h2');
montoTotalCompra.innerText = '0';
totalCompra.appendChild(montoTotalCompra);

let cantidadProductos = document.createElement('div');
cantidadProductos.innerHTML = '<h3>Cantidad de productos:</h3>';
sectionCarrito.appendChild(cantidadProductos);

let cantProductos = document.createElement('h3');
cantProductos.innerText = '0';
cantidadProductos.appendChild(cantProductos);

let botonFinalizar = document.createElement('button');
botonFinalizar.innerText = 'Finalizar compra';
sectionCarrito.appendChild(botonFinalizar);
botonFinalizar.setAttribute('class', 'boton');

//Funciones

function calcularTotalCarrito() {
  let total = 0;
  for(const producto of carrito) {
    total += producto.precio;
  }
  montoTotalCompra.innerText = total;
  cantProductos.innerText = carrito.length;
}

function agregarAlCarrito(id) {
  carrito.push(productos.find(p => p.id == id));
  localStorage.setItem('carrito', JSON.stringify(carrito));
  calcularTotalCarrito();
}

function vaciarCarrito() {
  montoTotalCompra.innerText = '0';
  cantProductos.innerText = '0';
  localStorage.clear();
  carrito = [];
}

//Le agrego un evento al boton para que muestre el precio final y despues se vacie el carrito

botonFinalizar.onclick = () => {
  const precioFinal = montoTotalCompra.innerText;
  alert(`Total a abonar: $${precioFinal}`);
  vaciarCarrito();
}

//Renderizado de los productos en cards

for(const producto of productos) {
  let container = document.createElement('div');
  container.setAttribute('class', 'card-product');
  container.innerHTML = `<div class="img-container">
                         <img class="img-product" src="${producto.foto}" alt="${producto.nombre}"/>
                         </div>
                         <div class="info-producto">
                         <p class="font">${producto.nombre}</p>
                         <strong class="font">$${producto.precio}</strong>
                         <button class="boton" id="${producto.id}">Agregar al carrito</button>
                         </div>`;
  sectionProductos.appendChild(container);
  //Evento para que los productos se agreguen al carrito al hacer click en el boton
  document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);
}