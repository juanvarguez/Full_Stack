let age = prompt("Cual es tu edad?");

if(age < 0){
	alert("Edad es negativa");
}

if(age == 21){
	alert("Feliz cumpleagnos 21");
}

if(age%2 == 0){
	alert("Tu edad es un numero par");
}
else {
	alert("Tu edad es un numero impar");
}

let isPerfect = age % Math.trunc(Math.sqrt(age));

if (!isPerfect) {
	alert("Tu edad es un cuadrado perfecto");
}
else {
	alert("Tu edad no es un cuadrado perfecto");
}