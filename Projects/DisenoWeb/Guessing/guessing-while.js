let number = Math.floor(Math.random() * 10);

const TRIES = 4;
let guesses = 1;
let guessNum = 0;
while(guesses <= TRIES){
	guessNum = Number(prompt("Adivina el numero, te quedan " + (TRIES-guesses+1) + " intentos"));
	if(guessNum == number) {
		alert("Ganaste!");
		break;
	}
	else if(guessNum > number){	
		alert("Vuelve a intentar, el numero es mas chico");
	}
	else {
		alert("Vuelve a intentar, el number es mas grande");
	}
	guesses++;
}