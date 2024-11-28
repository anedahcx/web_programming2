// FUNCIONES PROMESA
const operacionPromesa = (num1, num2) => {
    const resultado = num1 + num2;
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(resultado);
        }, 300);
    });
}

operacionPromesa(1,3)
    .then(result => console.log(result));


// FUNCIONES CALLBACK (RECURSIVIDAD)
// const operacionCallback = (num1, num2, callback) => {
//     return setInterval(() => {
//         requestIdleCallback(num1, num2)
//     }, 300);
// }

// operacionCallback(1, 3, (a,b) => {
//     console.log(a + b);
// });