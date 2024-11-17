//String.concat() Este metodo se usa para concatenar dos o mas cadenas de texto.

let saludo = "Hola, ";
let nombre = "Juan";
let mensaje = saludo.concat(nombre);
console.log(mensaje);  // "Hola, Juan"

//String.trim() Este metodo elimina los espacios en blanco al principio y al final de una cadena de texto.

let text1= "   Hola Mundo!   ";
let text2 = text.trim();
console.log(textoLimpio);  // "Hola Mundo!"

//String.trimStart() Este metodo elimina los espacios en blanco solamente al inicio de la cadena.

let text3 = "   Hola Mundo!";
let textoSinEspaciosAlInicio = text.trimStart();
console.log(textoSinEspaciosAlInicio);  // "Hola Mundo!"

//String.trimEnd() Este metodo elimina los espacios en blanco solamente al final de la cadena.

let text4 = "Hola Mundo!   ";
let textoSinEspaciosAlFinal = text.trimEnd();
console.log(textoSinEspaciosAlFinal);  // "Hola Mundo!"

//String.padStart() Este metodo agrega caracteres al inicio de la cadena hasta alcanzar la longitud 
//especificada. Si la cadena ya tiene la longitud deseada o más, no hace nada.

let numero = "5";
let numeroConCero = numero.padStart(3, "0");
console.log(numeroConCero);  // "005"

