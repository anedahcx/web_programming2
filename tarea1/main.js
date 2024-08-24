let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let estatura = prompt("Ingresa tu estatura");
let sexo = prompt("¿Cuál es tu sexo? Ingresar F / M");

calcularIMC(nombre, apellido, estatura, sexo);
function calcularIMC(nombre, apellido, estatura, sexo){
    let pesoIdeal;
    let indiceMasaCorporal;
    
    if (sexo === 'F' || sexo == 'f') {
         pesoIdeal =  50 + 2.3 * (((estatura*100)/2.54) - 60);
     } else if(sexo === 'M' || sexo == 'm') {
         pesoIdeal =  45.5 + 2.3 * (((estatura*100)/2.54) - 60);
     } else {
         alert("Por favor ingrese un sexo válido (F / M).");
         document.write(`<img src='recursos/gato.jpg'>`);
         return  // Salimos de la función para evitar que se siga ejecutando código erróneo.
     }
    
    indiceMasaCorporal = pesoIdeal / (estatura * estatura);
    
    document.write(`<div>Hola, ${nombre} ${apellido}! <br> Tu peso ideal es ${pesoIdeal.toFixed(1)} kg y tu índice de masa corporal es ${indiceMasaCorporal.toFixed(1)}</div>`);
    
}