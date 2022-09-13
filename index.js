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

//Cargo el stock de productos

const botas1 = new Producto('Botas Leather', 1, 5000, 'Negro', '45', 30);
const botas2 = new Producto('Botas Louisiana', 2, 8400, 'Blanco', '45', 10);
const botas3 = new Producto('Borcegos Beta', 3, 4500, 'Negro', '48', 20);
const botas4 = new Producto('Botas Cinnamon', 4, 3800, 'Blanco', '48', 40);

function calcularPrecio(precioBotas, cantidadBotas, costoEnvio) {
  return (precioBotas * cantidadBotas) + costoEnvio;
}

//Solicito datos al usuario

alert('Productos:' + '\n' + '(1) Botas Leather talle 45 $5.000' + '\n' + '(2) Botas Louisiana talle 45 $8.400' + '\n' + '(3) Bocegos Beta talle 48 $4.500' + '\n' + '(4) Botas Cinnamon talle 48 $3.800');
let botasSeleccionadas = parseInt(prompt('Ingresá el ID de las botas que deseas comprar:'));
let cantidad = parseInt(prompt('Ingresá la cantidad de botas a comprar:'));
const envio = 900; 

//Salida de consola con el precio final segun el ID elegido

if(botasSeleccionadas == botas1.id) {
  alert('El precio final de tu compra es: $' + calcularPrecio(botas1.precio, cantidad, envio));
  botas1.vender(cantidad);
} else if(botasSeleccionadas == botas2.id) {
  alert('El precio final de tu compra es: $' + calcularPrecio(botas2.precio, cantidad, envio));
  botas2.vender(cantidad);
} else if(botasSeleccionadas == botas3.id) {
  alert('El precio final de tu compra es: $' + calcularPrecio(botas3.precio, cantidad, envio));
  botas3.vender(cantidad);
} else if(botasSeleccionadas == botas4.id) {
  alert('El precio final de tu compra es: $' + calcularPrecio(botas4.precio, cantidad, envio));
  botas4.vender(cantidad);
} else {
  alert('Error! Ingresá un ID válido.');
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