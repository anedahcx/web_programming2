// // Prompt

// let nombre = prompt('Ingrese su nombre');
// let apellido = prompt('Ingrese su apellido');
// let edad = parseInt(prompt('Ingrese su edad'));

// // Validación

// if (isNaN(edad) || edad < 0) {
//     console.log('Edad inválida');
// } else {
//     console.log(`Hola ${nombre} ${apellido}! Tu edad es ${edad} años.`);
// }

// // Cálculo

// let numeroUno = JSON.parse(prompt('Número del primero numero'));
// let numeroDos = JSON.parse(prompt('Numero del segundo numero'));

let numeroUno = parseInt(prompt('Número del primero numero'));
let numeroDos = parseInt(prompt('Numero del segundo numero'));

let result = numeroUno + numeroDos;

console.log(typeof  result);
console.log(result);