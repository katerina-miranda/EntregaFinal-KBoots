//Usuario y contraseña

function pedirNombre() {
  let nombre = prompt('Ingresá tu nombre');
  saluda(nombre);
}

const saluda = (usuario) => {
  alert(`Bienvenida/o ${usuario}`);
}

function usuarioContrasena() {
  let usuario = prompt('Ingresá tu usuario');
  while(usuario != usuario) {
    alert('Usuario incorrecto');
    usuario = prompt('Ingresá tu usuario');
    return usuario;
  }
  let contrasena = prompt('Ingresá una contraseña');
  while(contrasena != contrasena) {
    alert('Contraseña incorrecta');
    contrasena = prompt('Ingresá una contraseña');
  }
  alert(`Hola, ${usuario} bienvenida/o a K-SHOES`);
}

pedirNombre();
usuarioContrasena();

//Cargar productos

class Producto {
  constructor(detalle) {
    this.nombre = detalle.nombre;
    this.id = detalle.id;
    this.precio = detalle.precio;
    this.color = detalle.color;
    this.talle = detalle.talle;
    this.stock = detalle.stock;
    this.vendido = false;
  }
  vender(cantidad) {
    this.stock = this.stock - cantidad;
  }
}

//Inicializo arrays

const botas = [];
const texanas = [];
const borcegos = [];
const carrito = [];

//Cargo el stock de productos

botas.push(new Producto({nombre: 'Botas Winx', id: 1, precio: '$16.890', color:'Negro', talle: '45', stock: 15}));
botas.push(new Producto({nombre: 'Botas Skul', id: 2, precio: '$15.890', color:'Negro', talle: '45', stock: 15}));
botas.push(new Producto({nombre: 'Botas XXX', id: 3, precio: '$11.890', color:'Negro', talle: '46', stock: 15}));

texanas.push(new Producto({nombre: 'Texanas Wendy', id: 4, precio: '$16.890', color:'Negro', talle: '46', stock: 15}));
texanas.push(new Producto({nombre: 'Texanas Aria', id: 5, precio: '$13.890', color:'Negro', talle: '46', stock: 15}));
texanas.push(new Producto({nombre: 'Texanas Shirp', id: 6, precio: '$13.990', color:'Negro', talle: '45', stock: 15}));

borcegos.push(new Producto({nombre: 'Borcegos Beta', id: 7, precio: '$8.990', color:'Negro', talle: '45', stock: 15}));
borcegos.push(new Producto({nombre: 'Borcegos Delta', id: 8, precio: '$13.890', color:'Negro', talle: '46', stock: 15}));
borcegos.push(new Producto({nombre: 'Borcegos Marig', id: 9, precio: '$15.890', color:'Negro', talle: '45', stock: 15}));

carrito.push();

//DOM 

//Controlo la sección previamente creada en el HTML

let sectionProductos = document.getElementById('section-productos');

//Creo la función para crear el código HTML de las cards

function crearCard(producto) {
  //Creo el div contenedor para cada card y aplico estilos
  let card = document.createElement('div');
  /* card.setAttribute('class', 'card card-producto');
  card.style.width = '18rem'; */
  //Asigno las cards al elemento padre sección
  sectionProductos.appendChild(card);
  //Creo divs que contengan las imágenes de los productos y se los asigno como hijos a las cards
  let cardImg = document.createElement('div');
  cardImg.innerHTML = `<img src="./img/${producto.id}.jpg" class="card-img-top" alt="${producto.nombre}"></img>`;
  card.appendChild(cardImg);
  //Creo divs que contengan los nombres de los productos y los botones, despues se los asigno como hijos a las cards
  let cardBody = document.createElement('div');
  cardBody.innerHTML = `<h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <button class="btn btn-dark">Comprar</button>`;
  card.appendChild(cardBody);
  /* cardBody.setAttribute('class', 'card-body'); */
}

//Demuestro los productos

for(const bota of botas) {
  alert('ID (' + bota.id + ') - ' + bota.nombre + ' ' + bota.precio);
}
for(const texana of texanas) {
  alert('ID (' + texana.id + ') - ' + texana.nombre + ' ' + texana.precio);
}
for(const borcego of borcegos) {
  alert('ID (' + borcego.id + ') - ' + borcego.nombre + ' ' + borcego.precio);
}

//Funcion para calcular el precio final de la compra

function calcularPrecio(precioCalzado, cantidadCalzado, costoEnvio) {
  return((precioCalzado * 1.21) * cantidadCalzado) + costoEnvio;
}

//Solicito ID de los zapatos

let botaSeleccionada = parseInt(prompt('Ingresá el ID de las botas que deseas comprar:'));
const botasElegidas = botas.find(botas => botas.id === botaSeleccionada);
const texanasElegidas = texanas.find(texanas => texanas.id === botaSeleccionada);
const borcegosElegidos = borcegos.find(borcegos => borcegos.id === botaSeleccionada);

//Solicito al usuario la cantidad de la prenda

let cantidad = parseInt(prompt('Ingresá la cantidad que queres comprar de los zapatos seleccionados:'));

//Costo de envio promedio dentro de CABA

const envio = 800;

//Salidas de consola indicando el precio final de la compra segun la prenda elegida

if(botaSeleccionada <= 0) {
  alert('Ingresá un ID válido');

} else if(botaSeleccionada <= 3) {
  alert(`Seleccionaste ${botasElegidas.nombre} ${botasElegidas.precio} \nTocá aceptar para agregarlas a tu carrito`);
  alert(`El precio final de tu compra es: $${calcularPrecio(botasElegidas.precio, cantidad, envio)}`);
  alert('¡Que lo disfrutes!');
  botasElegidas.vender(cantidad);

} else if(botaSeleccionada <= 6) {
  alert(`Seleccionaste ${texanasElegidas.nombre} ${texanasElegidas.precio} \nTocá aceptar para agregarlas a tu carrito`);
  alert(`El precio final de tu compra es: $${calcularPrecio(texanasElegidas.precio, cantidad, envio)}`);
  alert('¡Que lo disfrutes!');
  texanasElegidas.vender(cantidad);

} else if(botaSeleccionada <= 9) {
  alert(`Seleccionaste ${borcegosElegidos.nombre} ${borcegosElegidos.precio} \nTocá aceptar para agregarlos a tu carrito`);
  alert(`El precio final de tu compra es: $${calcularPrecio(borcegosElegidos.precio, cantidad, envio)}`);
  alert('¡Que lo disfrutes!');
  borcegosElegidos.vender(cantidad);

} else {
  alert('Ingresá un ID válido');
}