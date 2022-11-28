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

botas.push(new Producto({nombre: 'Botas Leather', id: 1, precio: '$22.550', color:'Negro', talle: '45', stock: 10}));
botas.push(new Producto({nombre: 'Botas Louisiana', id: 2, precio: '$14.850', color:'Blanco', talle: '45', stock: 15}));
botas.push(new Producto({nombre: 'Botas Cinnamon', id: 3, precio: '$18.260', color:'Negro', talle: '46', stock: 14}));

texanas.push(new Producto({nombre: 'Texanas Apola', id: 4, precio: '$6.300', color:'Blanco', talle: '46', stock: 15}));
texanas.push(new Producto({nombre: 'Texanas Aria', id: 5, precio: '$12.900', color:'Negro', talle: '46', stock: 12}));
texanas.push(new Producto({nombre: 'Texanas Shirp', id: 6, precio: '$13.800', color:'Blanco', talle: '45', stock: 9}));

borcegos.push(new Producto({nombre: 'Borcegos Beta', id: 7, precio: '$9.999', color:'Negro', talle: '45', stock: 15}));
borcegos.push(new Producto({nombre: 'Borcegos Genesis', id: 8, precio: '$15.480', color:'Blanco', talle: '46', stock: 14}));
borcegos.push(new Producto({nombre: 'Borcegos Marig', id: 9, precio: '$15.950', color:'Negro', talle: '45', stock: 10}));

carrito.push();

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