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

  vender() {
    this.stock = this.stock - cantidad;
  }
}

//Inicializo arrays

const botas = [];
const texanas = [];
const borcegos = [];

//Cargo el stock de productos

botas.push(new Producto({
  nombre: 'Botas Leather',
  id: 1,
  precio: '$22.550',
  color: 'Negro',
  talle: '45',
  stock: 10
}));

botas.push(new Producto({
  nombre: 'Botas Louisiana',
  id: 2,
  precio: '$14.850',
  color: 'Blanco',
  talle: '45',
  stock: 15
}));

botas.push(new Producto({
  nombre: 'Botas Cinnamon',
  id: 3,
  precio: '$18.260',
  color: 'Negro',
  talle: '46',
  stock: 14
}));

texanas.push(new Producto({
  nombre: 'Texanas Apola',
  id: 4,
  precio: '$6.300',
  color: 'Blanco',
  talle: '46',
  stock: 15
}));

texanas.push(new Producto({
  nombre: 'Texanas Aria',
  id: 5,
  precio: '$12.900',
  color: 'Negro',
  talle: '46',
  stock: 12
}));

texanas.push(new Producto({
  nombre: 'Texanas Shirp',
  id: 6,
  precio: '$13.800',
  color: 'Blanco',
  talle: '45',
  stock: 9
}));

borcegos.push(new Producto({
  nombre: 'Borcegos Beta',
  id: 7,
  precio: '$9.999',
  color: 'Negro',
  talle: '45',
  stock: 15
}));

borcegos.push(new Producto({
  nombre: 'Borcegos Genesis',
  id: 8,
  precio: '$15.480',
  color: 'Blanco',
  talle: '46',
  stock: 14
}));

borcegos.push(new Producto({
  nombre: 'Borcegos Marig',
  id: 9,
  precio: '$15.950',
  color: 'Negro',
  talle: '45',
  stock: 10
}));

//Demuestro los productos

for(const bota of botas) {
  alert('ID (' + bota.id + ') - ' + bota.nombre + ' ' + botas.precio);
}
for(const texana of texanas) {
  alert('ID (' + texana.id + ') - ' + texana.nombre + ' ' + texana.precio);
}
for(const borcego of borcegos) {
  alert('ID (' + borcego.id + ') - ' + borcego.nombre + ' ' + borcego.precio);
}

//Solicito ID de los zapatos

let botaSeleccionada = parseInt(prompt('Ingresá el ID de las botas que deseas comprar:'));
const botasElegidas = botas.find(botas => botas.id === botaSeleccionada);
const texanasElegidas = texanas.find(texanas => texanas.id === botaSeleccionada);
const borcegosElegidos = borcegos.find(borcegos => borcegos.id === botaSeleccionada);

if(botaSeleccionada <= 0) {
  alert('Ingresá un ID válido');
} else if(botaSeleccionada <= 3) {
  alert(`Seleccionaste ${botasElegidas.nombre} ${botasElegidas.precio}
  \nTocá aceptar para agregarlas a tu carrito`);
} else if(botaSeleccionada <= 6) {
  alert(`Seleccionaste ${texanasElegidas.nombre} ${texanasElegidas.precio}
  \nTocá aceptar para agregarlas a tu carrito`);
} else if(botaSeleccionada <= 9) {
  alert(`Seleccionaste ${borcegosElegidos.nombre} ${borcegosElegidos.precio}
  \nTocá aceptar para agregarlos a tu carrito`);
} else {
  alert('Ingresá un ID válido');
}

//Cotizador de descuentos

const menu = prompt('Elegí el descuento a realizar\n' +
'1-Realizar 20% de descuento\n' +
'2-Realizar 30% de descuento\n' +
'3-Realizar 40% de descuento\n' +
'0-Salir\n');

const elegirOpcionMenu = () => {
  let esCorrecto;
  let opcion;
  do {
    opcion = (menu);
    switch(opcion) {
      case "0":
        break;
      case "1":
        esCorrecto = true;
        break;
      case "2":
        esCorrecto = true;
        break;
      case "3":
        esCorrecto = true;
        break;
      default:
        esCorrecto = false;
        alert(`La opción ${opcion} no es válida`);
        break;
    }
  } while(!esCorrecto);
  return opcion;
}

const hacerUno = () => {
  let descuento20 = precio - (precio * 0.2);
  alert(`Tu descuento del 20% es de ${descuento20}`);
}

const hacerDos = () => {
  let descuento30 = precio - (precio * 0.3);
  alert(`Tu descuento del 30% es de ${descuento30}`);
}

const hacerTres = () => {
	let descuento40 = precio - (precio * 0.4);
  alert(`Tu descuento del 40% es de ${descuento40}`);
}

let salir = false;
let precio;

while(!salir) {
  let opcion = elegirOpcionMenu();
  precio = prompt('Ingresá el precio de las botas elegidas');
  switch(opcion) {
    case "1":
      hacerUno();
    break;
    case "2":
      hacerDos();
    break;
    case "3":
      hacerTres();
    break;
    case "0":
      salir = true;
    break; 
    default:
      alert(`La opción ${opcion} no es válida`);
  }
}