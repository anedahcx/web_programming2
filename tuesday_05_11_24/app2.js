const miPromesa = new Promise((resolve, reject) => {
    // SIMULACION DE UNA OPERACION ASINCRONA
    const exito = false;
    setInterval(() => {

        if(exito){
            resolve(console.log("EXITO"));
        } else {
            reject("TENEMOS UN ERROR")
        }
        
    }, 300);
});

    