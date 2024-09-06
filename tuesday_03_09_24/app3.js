// INCIO DE UN ARREGLO PARA EL ALMACEN DE TAREAS
let tasks = [];

// FUNCION PARA MOSTRAR NUETRO MENU
function showMenu(){
    return parseInt(prompt(`
            "Opciones disponibles"
            1. Agregar tarea
            2. Mostrar tareas
            3. Marcar mi tarea completada
            4. Salir
            "Elige una opcion"
        `));
}

// FUNCION PARA MANEJAR EL FLUJO DEL PROGRAMA

function main(){
    let continuar = true;

    while(continuar){

        let opcion = showMenu();

        switch(opcion){
            case 1:
                addTask();
                break;
            
            case 2:
                showTasks();
                break;

            case 3:
                markTaskAsCompleted();
                break;
            
            case 4:
                alert("SALIENDO DEL PROGRAMA . . .")
                continuar = false;
                break;

            default:
                alert("Opcion no valida. Por favor intenta de nuevo.");
        }

    }

}


// FUNCION PARA AGREGAR UNA TAREA AL ARREGLO   
function addTask() {
    let nombre = prompt("Ingresa el nombre de la tarea");
    
    if(nombre){
        let tarea = {
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada exitosamente");

    } else {
        alert("El nombre de la tarea no puede estar vacio");
    }

}

// FUNCION PARA MOSTRAR LAS TAREAS
function showTasks(){
    if(tareas.lenght === 0){
        alert("No hay tareas asignadas")
    } else {
        let mensaje = "Lista de tareas \n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index+1}.-${tarea.nombre} [${tarea.completada ? "completada" : "pendiente"}]`;
        })
        alert(mensaje);  
        
    }
}

main();