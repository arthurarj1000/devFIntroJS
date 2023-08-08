// console.log("Hola, soy Arturo :)");

// const number1 = 2;
// const number2 = 10;

// const sum = number1 + number2;
// const resta = number1 - number2;
// const multiplication = number1 * number2;

// console.log(sum);
// console.log(multiplication);
// console.log(resta);


// console.log("La suma de "+number1 + " con " +number2 + " es igual a " + sum);
// console.log("La resta de "+number1 + " con " +number2 + " es igual a " + resta);


// Ejemplo 2
// const number1String = prompt("dame un número");
// const number2String= prompt("dame otro número");

// console.log(typeof number1String);
// console.log(typeof number2String);

// const number1 = Number(number1String);
// const number2 = Number(number2String);

// console.log(typeof number1);
// console.log(typeof number2);

// const sum = number1 + number2;
// const resta = number1 - number2;
// const multiplication = number1 * number2;

// console.log("La suma de "+number1 + " con " +number2 + " es igual a " + sum);
// console.log("La resta de "+number1 + " con " +number2 + " es igual a " + resta);
// console.log("La multiplicación de "+number1 + " con " +number2 + " es igual a " + multiplication);

// Ejercicio 1, hacer que el usuario inserte los números que elija y que regrese el resultado de la multplicación
// const number1= prompt("pon un número");
// const number2= prompt("pon un número");

// const multiplication = number1 * number2;

// console.log("La multiplicación de: " +number1 + " con " +number2 + " es igual a " + multiplication);

// Ejercicio2, calcular su edad y año de nacimiento
const name= prompt("Dime tu nombre");


alert("Hola " + name + "!")

const birth_year= prompt("En qué año naciste?");
const actual_year= 2023;

// const age= actual_year - birth_year;
const age= actual_year - Number(birth_year); 


alert("Tienes " + age + " años!");