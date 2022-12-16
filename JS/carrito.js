/* //Le doy la bienvenida al ususaario cn un localStorage

let usuario;
let usuarioStorage = localStorage.getItem('usuario');

if(usuarioStorage) {
  usuario = usuarioStorage;
  let mensaje = `Bienvenido nuevamente ${usuario}`;
  alert(mensaje);
} else {
  usuario = prompt('Por favor ingrese su usuario');
  alert(`Hola ${usuario}, bienvenid@ a K-SHOES`);
  localStorage.setItem('usuario', usuario);
}

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

function agregarAlCarrito(id) {
  carrito.push(productos.find(p => p.id == id));
  localStorage.setItem('carrito', JSON.stringify(carrito));
  calcularTotalCarrito();
}

function calcularTotalCarrito() {
  let total = 0;
  for (const producto of carrito) {
    total += producto.precio;
  }
  montoTotalCompra.innerText = total;
  cantProductos.innerText = carrito.length;
}

function vaciarCarrito() {
  montoTotalCompra.innerText = "0";
  cantProductos.innerText = "0";
  localStorage.clear();
  carrito=[];
}

//Le agrego un evento al boton para que muestre el precio final y despues se vacie el carrito

botonFinalizar.onclick = () => {
  const precioFinal = montoTotalCompra.innerText;
  alert(`Total a abonar: $${precioFinal}`);
  vaciarCarrito();
}

//Renderizado de los productos en cards

for (const producto of productos) {
  let container = document.createElement('div');
  container.setAttribute('class', 'card-product');
  container.innerHTML = `<div class="img-container">
                        <img src="${producto.foto}" alt="${producto.nombre}" class="img-product"/>
                        </div>
                        <div class="info-producto">
                        <p class="font">${producto.nombre}</p>
                        <strong class="font">$${producto.precio}</strong>
                        <button class="boton" id="${producto.id}">Agregar al carrito</button>
                        </div>`;
  sectionProductos.appendChild(container);
  //Evento para que los productos se agreguen al carrito al hacer click en el boton
  document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);
} */

//inicializo la variable carrito con una funcion para que detecte si existen valores en el storage
let carrito = cargarCarrito();

//tomo control sobre las secciones del HTML
let sectionProductos = document.getElementById("section-productos");
let sectionCarrito = document.getElementById("section-carrito");

//creacion de la seccion carrito con DOM
let totalCompra = document.createElement("div");
totalCompra.innerHTML = "<h2>Total: $</h2>";
sectionCarrito.appendChild(totalCompra);

let montoTotalCompra = document.createElement("h2");
montoTotalCompra.innerText = "0";
totalCompra.appendChild(montoTotalCompra);

let cantidadProductos = document.createElement("div");
cantidadProductos.innerHTML = "<h3>Cantidad de productos: </h3>";
sectionCarrito.appendChild(cantidadProductos);

let cantProductos = document.createElement("h3");
cantProductos.innerText = "0";
cantidadProductos.appendChild(cantProductos);

let botonFinalizar = document.createElement("button");
botonFinalizar.innerText = "Finalizar compra";
sectionCarrito.appendChild(botonFinalizar);
botonFinalizar.setAttribute("class", "boton");

//Le agrego un evento al boton para que muestre el precio final
botonFinalizar.onclick = () => {
  const precioFinal = montoTotalCompra.innerText;
  //uso sweet alert para que el usuario confirme su compra, cuando toca si se vacia el carrito
  Swal.fire({
    title: '¿Seguro que queres finalizar tu compra?',
    text: `Total a abonar: $${precioFinal}`,
    showCancelButton: true,
    confirmButtonColor: '#008f39',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then((result) => {
    result.isConfirmed ? Swal.fire('Compra confirmada', '¡Que lo disfrutes!', 'success') : vaciarCarrito;
  })
}

//renderizado de los productos en cards
for (const producto of productos) {
  let container = document.createElement("div");
  container.setAttribute("class", "card-product");
  container.innerHTML = ` <div class="img-container">
                            <img src="${producto.foto}" alt="${producto.nombre}" class="img-product"/>
                            </div>
                            <div class="info-producto">
                            <p class="font">${producto.nombre}</p>
                            <strong class="font">$${producto.precio}</strong>
                            <button class="boton" id="btn${producto.id}"> Agregar al carrito </button>
                            </div>`;
  sectionProductos.appendChild(container);
  //Evento para que los productos se agreguen al carrito al hacer click en el boton
  document.getElementById(`btn${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);
}

//Funciones
function agregarAlCarrito(id) {
  carrito.push(productos.find(p => p.id == id));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  calcularTotalCarrito();
}

function calcularTotalCarrito() {
  let total = 0;
  for (const producto of carrito) {
    total += producto.precio;
  }
  montoTotalCompra.innerText = total;
  cantProductos.innerText = carrito.length;
}

function vaciarCarrito() {
  montoTotalCompra.innerText = "0";
  cantProductos.innerText = "0";
  localStorage.clear();
  carrito = [];
}

function cargarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  carrito == null ? [] : carrito; 
}