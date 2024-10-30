let carrito = [];
let listaFrutas;

let fruta = prompt('Ingresa una fruta');
carrito.push(fruta);
//console.log(carrito);

while(confirm('Deseas agregar otra fruta al carrito?')){
    let fruta = prompt('Ingresa una fruta');
    carrito.push(fruta);
}

alert("TIENE LAS SIGUIENTES FRUTAS EN EL CARRITO: ");


alert(carrito.forEach(frutas, index => { listaFrutas =+ `${index+1} \n`}));
