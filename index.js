//Usuario y contraseña

function saludo(persona) {
  alert('Hola ' + persona + ', bienvenida/o');
}

const pedirNombre = () => {
  let nombre = prompt('Ingresá tu nombre');
  saluda(nombre);
}

const usuarioContrasena = () => {
  let usuario = prompt('Ingresá tu usuario');
  while (usuario != usuario) {
    alert('Usuario incorrecto');
    usuario = prompt('Ingresá tu usuario');
    return usuario;
  } 
  let contrasena = prompt('Ingresá una contraseña');
  while (contrasena != contrasena) {
    contrasena = prompt('Ingresá una contraseña');
  }   
  alert ('Hola, ' + usuario + ' bienvenida/o a K-SHOES');
  saluda(usuario);
}

const saluda = (usuario) => {
  alert('Bienvenida/o ' + usuario);
}

pedirNombre();
usuarioContrasena();

//Cargar producto

class Producto {
  constructor(nombre, id, precio, color, talle, stock) {
    this.nombre = nombre;
    this.id = id;
    this.precio = precio;
    this.color = color;
    this.talle = talle;
    this.stock = stock;
  }
  vender(cantidad) {
    this.stock = this.stock - cantidad;
  }
}

//Inicializo arrays

const bota = [];
const texana = [];
const borcego = [];

//Cargo el stock de productos

bota.unshift(new Producto('Botas Leather', 1, '$22.550', 'Negro', '45', 30));
bota.unshift(new Producto('Botas Louisiana', 2, '$14.850', 'Blanco', '45', 10));
bota.unshift(new Producto('Botas Cinnamon', 3, '$18.260', 'Negro', '48', 40));

texana.unshift(new Producto('Texanas Apola', 4, '$6.300', 'Blanco', '46', 15));
texana.unshift(new Producto('Texanas Aria', 5, '$12.900', 'Negro', '46', 22));
texana.unshift(new Producto('Texanas Shirp', 6, '$13.800', 'Blanco', '48', 30));

borcego.unshift(new Producto('Borcegos Beta', 7, '$9.999', 'Negro', '45', 21));
borcego.unshift(new Producto('Borcegos Genesis', 8, '$15.480', 'Blanco', '48', 30));
borcego.unshift(new Producto('Borcegos Marig', 9, '$15.950', 'Negro', '45', 30));

//Demuestro los productos 

for(const botas of bota) {
  alert('ID (' + botas.id + ') - ' + botas.nombre + ' ' + botas.precio);
}
for(const texanas of texana) {
  alert('ID (' + texanas.id + ') - ' + texanas.nombre + ' ' + texanas.precio);
}
for(const borcegos of borcego) {
  alert('ID (' + borcegos.id + ') - ' + borcegos.nombre + ' ' + borcegos.precio);
}

//Solicito ID de los zapatos

let botaSeleccionada = parseInt(prompt('Ingresá el ID de las botas que deseas comprar:'));
const botasElegidas = bota.find(botas => botas.id === botaSeleccionada);
const texanasElegidas = texana.find(texanas => texanas.id == botaSeleccionada);
const borcegosElegidos = borcego.find(borcegos => borcegos.id == botaSeleccionada);

if(botaSeleccionada <= 0) {
  alert('Ingresá un ID válido');
} else if(botaSeleccionada <= 3) {
  alert('Seleccionaste ' +  botasElegidas.nombre + ' ' + botasElegidas.precio + '\nTocá aceptar para agregarlas a tu carrito'); 
} else if(botaSeleccionada <= 6) {
  alert('Seleccionaste ' + texanasElegidas.nombre + ' ' + texanasElegidas.precio + '\nTocá aceptar para agregarlas a tu carrito');
} else if(botaSeleccionada <= 9) {
  alert('Seleccionaste ' + borcegosElegidos.nombre + borcegosElegidos.precio + '\nTocá aceptar para agregarlos a tu carrito');
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
    switch (opcion) {
      case "0":
        break;
      case "1":
      case "2":
      case "3":
        esCorrecto = true;
      break;
      default:
        esCorrecto = false;
        alert('La opción ' + opcion + 'no es válida');
      break;
    }
  } while(!esCorrecto);
  return opcion;
}

const hacerUno = () => {
  let descuento20 = precio - (precio * 0.2);
  alert('Tu descuento del 20% es de ' + descuento20);
}

const hacerDos = () => {
  let descuento30 = precio - (precio * 0.3);
  alert('Tu descuento del 30% es de ' + descuento30);
}

const hacerTres = () => {
	let descuento40 = precio - (precio * 0.4);
  alert('Tu descuento del 40% es de ' + descuento40);
}

let salir = false;
let precio ;

while(!salir) {
  let opcion = elegirOpcionMenu();
  precio = prompt('Ingresá el precio de las botas elegidas');
  switch (opcion) {
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
      salir = false;
    break; 
  }
}