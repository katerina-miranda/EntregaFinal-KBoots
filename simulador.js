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
  precio = prompt('Ingresá un precio');
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