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

//EJERCICIO 6: Obtener el substring específico de una cadena, sin importar si es modificada
let str6 = "http://ghthsbn/forms/requests/sql/requester=/?cacheid=a5300fgh";
let indexStr6 = str6.indexOf("cacheid");

console.log("\n*    *   *   ejercicio 6     *   *   *");
console.log("cacheid de str6:", str6.substring(indexStr6));

//EJERCICIO 7: Obtener el tamaño de un string, si es impar, se agregará el caracter 'd' al final
let str7 = "You're my hope";

console.log("\n*    *   *   ejercicio 7     *   *   *");
if (str7.length % 2 != 0){
    str7 = str7.concat("d");
    console.log("Tamaño impar");
    console.log("Frase str7:", str7);
}
else{
    console.log("Tamaño par");
    console.log("Frase str7:", str7);
}

//EJERCICIO 8: Se busca un substring dentro de un string principal
//  Posteriormente se muestra en consola el resto de la frase a partir del índice del substring
let str8 = "JS learning is fun";
let search = "learning";

console.log("\n*    *   *   ejercicio 8     *   *   *");
if(str8.includes(search) == true){
    console.log("El substring se encontró");
    let indexStr9 = str8.indexOf(search);
    let str9 = str8.substring(indexStr9+search.length);
    console.log("Resto de la frase:", str9);
}
else{
    console.log("El substring no se encontró");
    console.log("Frase:", str8);
}

//EJERCICIO 9: Reemplazar un substing por otro en el string principal
let str10 = "Learning JS is fun";

console.log("\n*    *   *   ejercicio 9     *   *   *");
console.log("Frase original:", str10);
str10 = str10.replace(/fun/gi, "huge fun");
console.log("Frase corregida:", str10);

//EJERCICIO 10: Obtener cuántas veces se repite el substring 'SS' en el string principal
let str11 = "ASSEDFTTYUJKKIUHHSFFSSTYSS";
let array = str11.match(/SS/gi);

console.log("\n*    *   *   ejercicio 10     *   *   *");
console.log("'SS' se repite", array.length, "veces en str11");

//EJERCICIO 11: Cambiar el número 300 por su valor en letra.
let str12 = "A crowd of 300 were expected";

console.log("\n*    *   *   ejercicio 11     *   *   *");
console.log("Frase original:", str12);
str12 = str12.replace(/300/g, "three hundred");
console.log("Frase corregida:", str12);

//EJERCICIO 12: Separar las letras y los dígitos de un string en dos strings diferentes
let str13 = "ASWAP34ASD678UJK99FGT54HUI";

let digits = str13.match(/\d/g).toString().replace(/[^A-Za-z0-9 ]/g,"");
let letters = str13.match(/[a-zA-Z]/gi).toString().replace(/[^A-Za-z0-9 ]/g,"");
console.log("\n*    *   *   ejercicio 12     *   *   *");
console.log("str13:", str13);
console.log("String de los dígitos:", digits);
console.log("String de las letras:", letters);