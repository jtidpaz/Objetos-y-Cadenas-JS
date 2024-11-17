// 1. String.concat()
let saludo = "Hola, ";
let nombre = "Juan";
let mensaje = saludo.concat(nombre);
console.log(mensaje);  // "Hola, Juan"

// 2. String.trim()
let texto = "   Hola Mundo!   ";
let textoLimpio = texto.trim();
console.log(textoLimpio);  // "Hola Mundo!"

// 3. String.trimStart()
let textoSinEspaciosAlInicio = texto.trimStart();
console.log(textoSinEspaciosAlInicio);  // "Hola Mundo!"

// 4. String.trimEnd()
let textoSinEspaciosAlFinal = texto.trimEnd();
console.log(textoSinEspaciosAlFinal);  // "Hola Mundo!"

// 5. String.padStart()
let numero = "5";
let numeroConCero = numero.padStart(3, "0");
console.log(numeroConCero);  // "005"