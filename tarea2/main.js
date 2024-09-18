// ARREGLO PARA ALMACENAR LOS OBJETOS
let productos = [];

function showMenu() {
    return parseInt(prompt(`
        "Selecciona un producto para agregar al carrito..."
        1. Camisa [$300]
        2. Pantalón [$500]
        3. Zapatos [$800]
        4. Sombrero [$200]
        9. Ver carrito y Total
        0. Salir
        `));
}

// FLUJO DE PROGRAMA
function main() {
    let continuar = true;
    let total = 0;
    console.log(total);
    
    while (continuar) {
        let opcion = showMenu();
        
        switch (opcion) {
            case 1:
                agregarProducto("Camisa", 300, total);
                break;
            case 2:
                agregarProducto("Pantalón", 500, total);
                break;
            case 3:
                agregarProducto("Zapatos", 800, total);
                break;
            case 4:
                agregarProducto("Sombreros", 200, total);
                break;
            case 9:
                verCarrito(total);
                break;
            case 0:
                continuar = false;
                break;
            default:
                alert("Opción inválida. Intente nuevamente.");
        }
    }
}

// FUNCION PARA AGREGAR UN PRODUCTO AL CARRITO
function agregarProducto(nombre, precio) {
    let producto = {
        nombre: nombre,
        precio: precio,
    }

    productos.push(producto);
    //return parseInt(total += producto.precio);
}

// FUNCION PARA VER EL CARRITO
function verCarrito(total){
    
    if(productos.length === 0){
        alert("El carrito está vacío.");
        return;
    } else {
        //alert("Productos en el carrito:\n");
        
        let lista = "Lista de productos \n"

        productos.forEach(
            (producto, index) => { lista += `${index+1}.-${producto.nombre} - ${producto.precio} \n`;
        });
        

        productos.forEach(
            producto => total += producto.precio
        );

        alert(lista += `\n Total: ${total}`);
    }

}

main();