isEven = numero => numero%2?"impar":"par";

factorial = numero => (numero<=1)?1:numero*factorial(numero-1);

kebabToSnake = value => value.replace(/-/g,"_");

console.log("Numero 4 es " + isEven(4));
console.log("Numero 21 es " + isEven(21));

console.log("Factorial de 5 es " + factorial(5));
console.log("Factorial de 2 es " + factorial(2));
console.log("Factorial de 10 es " + factorial(10));
console.log("Factorial de 0 es " + factorial(0));

console.log("El kebabToSnake de \"hello-world\" es " + kebabToSnake("hello-world"));
console.log("El kebabToSnake de \"dogs-are-awesome\" es " + kebabToSnake("dogs-are-awesome"));