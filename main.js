let numeroCorrecte = Math.floor(Math.random() * 20) + 1; // número aleatori del 1 al 20
console.log(numeroCorrecte); // en la consola pots veure el numero correcte

let jugades = 20;
let puntos = 0;
let ganar = 0;

let ah = false;

function numeroenviado() {
    let numero = document.getElementById("input").value; // valor que dona el usuari
    numero = Number(numero);
    let frase = document.getElementById("frase");
    let frase2 = document.getElementById("jugades");
    let frase3 = document.getElementById("puntos");
    let incognita = document.getElementById("incognita");
    let color = document.getElementById("general");

    if (isNaN(numero) || numero === "") {
        alert("El número introduït no és correcte");
    }

    // Si te quedan jugadas
    if (jugades > 0 && !ah) {
        if (numero == numeroCorrecte) { 
            frase.innerHTML = "Correcte!!!";
            puntos += jugades;
            frase3.innerHTML = "Tens " + puntos +  " punts";
            incognita.innerHTML = numeroCorrecte;
            ganar = 1;
            color.style.backgroundColor = "green";
            ah = true;
        } else if (numero < numeroCorrecte) {
            frase.innerHTML = "El número es més gran";
            jugades--; 
        } else if (numero > numeroCorrecte) {
            frase.innerHTML = "El número es més petit";
            jugades--; 
        }
        frase3.innerHTML = "Tens " + puntos +  " punts";
        frase2.innerHTML = "Queden " + jugades +  " jugades";
    } 
    // Si ya no quedan jugadas
    if (jugades === 0 && !ganar) {
        frase.innerHTML = "Final de la partida";
        incognita.innerHTML = numeroCorrecte;
        color.style.backgroundColor = "red";
    }
}

function reinicia() {
    if (ganar == 1 || jugades == 0) {
        numeroCorrecte = Math.floor(Math.random() * 20) + 1;
        console.log(numeroCorrecte); // en la consola pots veure el numero correcte
        
        jugades = 20;
        ganar = 0; 
        ah = false;

        document.getElementById("frase").innerHTML = "Comencem la partida";
        document.getElementById("jugades").innerHTML = "Queden " + jugades + " jugades";
        document.getElementById("puntos").innerHTML = "Tens " + puntos + " punts";
        document.getElementById("incognita").innerHTML = "?";
        document.getElementById("general").style.backgroundColor = "";
    }
}
