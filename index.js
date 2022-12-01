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

const borcegos = [];
const botas = [];
const sandalias = [];
const texanas = [];
const zapatos = [];
const carrito = [];

//Cargo el stock de productos

borcegos.push(new Producto({nombre: 'Borcegos Beta', id: 1, precio: '$8.990', color:'Negro', talle: '45', stock: 15}));
borcegos.push(new Producto({nombre: 'Borcegos Delta', id: 2, precio: '$13.890', color:'Negro', talle: '46', stock: 15}));
borcegos.push(new Producto({nombre: 'Borcegos Marig', id: 3, precio: '$15.890', color:'Negro', talle: '45', stock: 15}));

botas.push(new Producto({nombre: 'Boots Winx', id: 4, precio: '$16.890', color:'Negro', talle: '45', stock: 15}));
botas.push(new Producto({nombre: 'Boots Skul', id: 5, precio: '$15.890', color:'Negro', talle: '45', stock: 15}));
botas.push(new Producto({nombre: 'Boots XXX', id: 6, precio: '$11.890', color:'Negro', talle: '46', stock: 15}));

sandalias.push(new Producto({nombre: 'Sandals Berry', id: 7, precio: '$13.890', color:'Negro', talle: '45', stock: 15}));
sandalias.push(new Producto({nombre: 'Sandals Strappy', id: 8, precio: '$13.890', color:'Negro', talle: '45', stock: 15}));
sandalias.push(new Producto({nombre: 'Sandals Ava', id: 9, precio: '$14.890', color:'Negro', talle: '46', stock: 15}));

texanas.push(new Producto({nombre: 'Texanas Wendy', id: 10, precio: '$16.890', color:'Negro', talle: '46', stock: 15}));
texanas.push(new Producto({nombre: 'Texanas Aria', id: 11, precio: '$13.890', color:'Negro', talle: '46', stock: 15}));
texanas.push(new Producto({nombre: 'Texanas Shirp', id: 12, precio: '$13.990', color:'Negro', talle: '45', stock: 15}));

zapatos.push(new Producto({nombre: 'Atico Mules', id: 13, precio: '$13.290', color:'Negro', talle: '45', stock: 15}));
zapatos.push(new Producto({nombre: 'Zara Hells', id: 14, precio: '$17.890', color:'Negro', talle: '45', stock: 15}));
zapatos.push(new Producto({nombre: 'Devon Hells', id: 15, precio: '$13.690', color:'Negro', talle: '46', stock: 15}));

carrito.push();

//DOM 

//Controlo la sección previamente creada en el HTML

let sectionProductos = document.getElementById('section-productos');

//Creo la función para crear el código HTML de las cards

function crearCard(producto) {
  //Creo el div contenedor para cada card y aplico estilos
  let card = document.createElement('div');
  card.setAttribute('class', 'card card-producto');
  card.style.width = '18rem';
  //Asigno las cards al elemento padre sección
  sectionProductos.appendChild(card);
  //Creo divs que contengan las imágenes de los productos y se los asigno como hijos a las cards
  let cardImg = document.createElement('div');
  cardImg.innerHTML = `<img src="./imagenes/${producto.id}.jpeg" class="card-img-top" alt="${producto.nombre}"></img>`;
  card.appendChild(cardImg);
  //Creo divs que contengan los nombres de los productos y los botones, despues se los asigno como hijos a las cards
  let cardBody = document.createElement('div');
  cardBody.innerHTML = `<h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <button class="btn btn-dark">Comprar</button>`;
  card.appendChild(cardBody);
  cardBody.setAttribute('class', 'card-body');
}

//Demuestro los productos

for(const borcego of borcegos) {
  alert('ID (' + borcego.id + ') - ' + borcego.nombre + ' ' + borcego.precio);
}
for(const bota of botas) {
  alert('ID (' + bota.id + ') - ' + bota.nombre + ' ' + bota.precio);
}
for(const sandalia of sandalias) {
  alert('ID (' + sandalia.id + ') - ' + sandalia.nombre + ' ' + sandalia.precio);
}
for(const texana of texanas) {
  alert('ID (' + texana.id + ') - ' + texana.nombre + ' ' + texana.precio);
}
for(const zapato of zapatos) {
  alert('ID (' + zapato.id + ') - ' + zapato.nombre + ' ' + zapato.precio);
}

//Funcion para calcular el precio final de la compra

function calcularPrecio(precioCalzado, cantidadCalzado, costoEnvio) {
  return((precioCalzado * 1.21) * cantidadCalzado) + costoEnvio;
}

//Solicito ID de los zapatos

let botaSeleccionada = parseInt(prompt('Ingresá el ID de las botas que deseas comprar:'));
const borcegosElegidos = borcegos.find(borcegos => borcegos.id === botaSeleccionada);
const botasElegidas = botas.find(botas => botas.id === botaSeleccionada);
const sandaliasElegidas = sandalias.find(sandalias => sandalias.id === botaSeleccionada);
const texanasElegidas = texanas.find(texanas => texanas.id === botaSeleccionada);
const zapatosElegidas = zapatos.find(zapatos => zapatos.id === botaSeleccionada);

//Solicito al usuario la cantidad de la prenda

let cantidad = parseInt(prompt('Ingresá la cantidad que queres comprar de los zapatos seleccionados:'));

//Costo de envio promedio dentro de CABA

const envio = 800;

//Salidas de consola indicando el precio final de la compra segun la prenda elegida

if(botaSeleccionada <= 0) {
  alert('Ingresá un ID válido');

} else if(botaSeleccionada <= 3) {
  alert(`Seleccionaste ${borcegosElegidos.nombre} ${borcegosElegidos.precio} \nTocá aceptar para agregarlos a tu carrito`);
  Number(alert(`El precio final de tu compra es: $${calcularPrecio(borcegosElegidos.precio, cantidad, envio)}`));
  alert('¡Que lo disfrutes!');
  borcegosElegidos.vender(cantidad);

} else if(botaSeleccionada <= 6) {
  alert(`Seleccionaste ${botasElegidas.nombre} ${botasElegidas.precio} \nTocá aceptar para agregarlas a tu carrito`);
  Number(alert(`El precio final de tu compra es: $${calcularPrecio(botasElegidas.precio, cantidad, envio)}`));
  alert('¡Que lo disfrutes!');
  botasElegidas.vender(cantidad);

} else if(botaSeleccionada <= 9) {
  alert(`Seleccionaste ${sandaliasElegidas.nombre} ${sandaliasElegidas.precio} \nTocá aceptar para agregarlas a tu carrito`);
  Number(alert(`El precio final de tu compra es: $${calcularPrecio(sandaliasElegidas.precio, cantidad, envio)}`));
  alert('¡Que lo disfrutes!');
  sandaliasElegidas.vender(cantidad);

} else if(botaSeleccionada <= 12) {
  alert(`Seleccionaste ${texanasElegidas.nombre} ${texanasElegidas.precio} \nTocá aceptar para agregarlas a tu carrito`);
  Number(alert(`El precio final de tu compra es: $${calcularPrecio(texanasElegidas.precio, cantidad, envio)}`));
  alert('¡Que lo disfrutes!');
  texanasElegidas.vender(cantidad);

} else if(botaSeleccionada <= 15) {
  alert(`Seleccionaste ${zapatosElegidas.nombre} ${zapatosElegidas.precio} \nTocá aceptar para agregarlas a tu carrito`);
  Number(alert(`El precio final de tu compra es: $${calcularPrecio(zapatosElegidas.precio, cantidad, envio)}`));
  alert('¡Que lo disfrutes!');
  zapatosElegidas.vender(cantidad);

} else {
  alert('Ingresá un ID válido');
}