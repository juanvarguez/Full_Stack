console.log("Numeros entre -10 y 19: ");
for(let i = -9; i < 19; i++){
	console.log(i);
}

console.log("Numneros pares entre 10 y 40");
for(let i = 11; i < 40; i++){
	i%2 == 0 ? console.log(i) : 0;
}

console.log("Numeros impares entre 300 y 333");
for(let i = 301; i < 333; i++){
	i%2 == 1 ? console.log(i) : 0;
}

console.log("Numeros divisibles entre 3 y 5 que esten en el rango de 5 y 50");
for(let i = 6; i < 50; i++){
	(i%3) || (i%5) ? null : console.log(i);
}