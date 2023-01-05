/*  
    ejerciciosRepasoString.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 05 de enero de 2023.
    File donde estoy repasando lo aprendido sobre las bases y operaciones con strings en JavaScript.
*/

//EJERCICIO 1: Juntar 2 o más strings.
let str1 = "hola";
let str2 = "soy";
let str3 = "masha";
let result = str1.concat(" ", str2, " ", str3);

console.log("\n*    *   *   ejercicio 1     *   *   *");
console.log("Concatenación:", result);

//EJERCICIO 2: Indicar si un substring se encuentra presente en el string principal
let mainStr = "I love programming";
let subStr = "programming";

console.log("\n*    *   *   ejercicio 2     *   *   *");
console.log("¿El substring se encuentra en el string principal?", mainStr.includes(subStr));
console.log("El substring se encuentra en el índice", mainStr.indexOf(subStr));

//EJERCICIO 3: Se comparan los strings de las variables result y mainStr para saber si son similares o no
console.log("\n*    *   *   ejercicio 3     *   *   *");
console.log("¿Los strings de los ejercicios 1 y 2 son iguales?", result.toLowerCase() === mainStr.toLowerCase());

//EJERCICIO 4: Eliminar los espacios de str1
let str4 = "    I like JavaScript programming   ";

console.log("\n*    *   *   ejercicio 4     *   *   *");
console.log("str4 con espacios:", str4);
console.log("str4 sin espacios:", str4.trim());

//EJERCICIO 5: Convertir a uppercase y lowercase
let str5 = "JS+js=2Js";

console.log("\n*    *   *   ejercicio 5     *   *   *");
console.log("str5 en mayúsculas:", str5.toUpperCase());
console.log("str5 en minúsculas:", str5.toLowerCase());

