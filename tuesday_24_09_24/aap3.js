let equis = "x ";


// VERTICAL
for (let i = 0; i < 4; i++) {
    console.log(equis + "\n");
}

console.log(equis.repeat(4));
console.log("================================");

// HORIZONTAL

let fila = parseInt(prompt("HORIZONTAL: "));
let columna = parseInt(prompt("VERTICAL: "));
console.log(equis.repeat(fila));
console.log("================================");


// HORIZONTAL Y VERTICAL
for (let i = 0; i < columna; i++) {
    console.log(equis);
    console.log('');
}
console.log("================================");

// CUBITO
for (let i = 0; i < 4; i++) {
    console.log("    xxxx    \n".repeat(4));

}
console.log("================================");

// TABLA DE MULTIPLICAR
for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 11; j++) {
        console.log(i ," * " ,j," = " ,  i*j );
}
}
