// Ejercicio 1

const numero1 = Number(prompt('Ingresá un número'));

for (let i = 0; i <= 20; i++) {
  const result = i * numero1;
  alert('La suma de ' + i + ' + ' + numero1 + ' es ' + result);  
}

// Ejercicio 2

let numero2 = Number(prompt('Escribe un número'));

if (numero2 % 2 === 0 || numero2 % 3 === 0 || numero2 % 5 === 0 || numero2 % 7 === 0) {
  alert('Es divisible por 2, 3, 5 o 7');
} else {
  alert('No es divisible ni por 2, ni por 3, ni por 5, ni por 7');
}

// Ejercicio 3
 
let nombre = prompt('Ingresá tu nombre');
let apellido = prompt('Ingresá tu apellido');

while((nombre || apellido) !== 'salir') {
  alert('Hola, ' + nombre + ' ' + apellido + ' bienvenida a mi página!');
  nombre = prompt('Ingresá otro nombre');
  apellido = prompt('Ingresá otro apellido');
}

// Ejercicio 4

let parientes = prompt('Ingresá el nombre de tu familia');
let familia = '';

while(parientes != 'yo') {
  familia += parientes + '\n';
  parientes = prompt('Ingresá el nombre de tu familia');
}

alert(familia);

// Ejercicio 5

let cantidad = prompt('Ingresá una cantidad de repeticiones')
let texto = prompt('Ingresá el texto a repetir')

for(let i = 1; i <= cantidad; i++) {
  alert(texto);
}

// Ejercicio 6

let repeticion = prompt('Ingresá una cantidad de repeticiones');

for(let i = 1; i < repeticion; i++) {
  if(i > 5) {
    break;
  }
  alert('Uy! Sólo son 5 repeticiones');
}