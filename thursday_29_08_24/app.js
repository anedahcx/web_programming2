let adivinaAdivinador = Math.floor(Math.random()*(11-1)+1);


let vidas = 3;

function intento(vidas){
    return prompt("Adivina el numero del 1 al 10, tienes " + vidas + "vidas" );

}

while (vidas > 0){
    let guess = intento(vidas)
    if( guess == adivinaAdivinador){
        alert("Ganaste!! un Go o qué?");
        break;
    }else{
        vidas --;
        if(vidas == 0){break;}
        

        if (guess > adivinaAdivinador){
            
            alert("Intenta de nuevo, tienes "+ vidas +" vidas. El numero es más chico")
        }else ( alert("Intenta de nuevo, tienes "+ vidas +" vidas. El numero es más grande"));
    }
}

if (vidas == 0){
    alert("Perdiste, el numero era: "+ adivinaAdivinador);
}