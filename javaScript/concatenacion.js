let nombre = "Programacion" + " Fácil";
let saludo = "Les doy la bienvenida a ";
let fraseCompleta = saludo + nombre;
console.log(fraseCompleta);
let agradecimiento = ". Gracias por elegirnos";
fraseCompleta = fraseCompleta + agradecimiento;
console.log(fraseCompleta);

let frase = "JavaScript " + "es un lenguaje " + "esencial para crear" + " sitios web poderosos.";
console.log(frase);

let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";
let concatenaNumeros = numeroString1 + numeroString2 + numeroString3
console.log(concatenaNumeros);
concatenaNumeros = `El primer numero es: ${numeroString1}, el segundo: ${numeroString2} y el tercero: ${numeroString3}.`;
console.log(concatenaNumeros);

var age = prompt("Cual es tu edad:?");
console.log(age);
let name = prompt("y tu nombe:?");
nameAge = `Eres: ${name} y tienes: ${age} años.`;
console.warn(nameAge);