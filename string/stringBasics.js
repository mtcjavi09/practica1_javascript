/*  
    stringBasics.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 03 de enero de 2023.
    File donde estoy practicando las operaciones con string en JavaScript.
*/

//Se declaran e inicializan dos variables para realizar las operaciones de comparación
let str1 = "Me encanta aprender JavaScript";
let str2 = "me encanta aprender javascript";

//Operador === (strict equality) se usa para verificar si dos strings son exactamente iguales
console.log("¿Los strings son exactamente iguales? ", str1 === str2);

//Se convierten ambos strings a upper case y después se usa el strict equality operator
console.log("¿Los strings son iguales si están en mayúsculas? ", str1.toUpperCase() === str2.toUpperCase());

//Se declara e inicializa una variable para realizar la operación trim
let str3 = "    Este el string para realizar el trim    ";

//Trim se usa para eliminar los espacios antes y después del string
//Se mostrará en consola el str3 sin trim y con trim
console.log("str3 sin trim: ", str3);
console.log("str3 con trim: ", str3.trim());

//Se declaran e inicializan tres variables para realizar una concatenación de strings
let friday = "friday";
let saturday = "saturday";
let sunday = "sunday";

//Se concatenan las variables anteriores usando el signo más (+) en una nueva variable
let concatenationPlus = friday + " " + saturday + " " + sunday;
//Se muestra el resultado en consola
console.log("Concatenación usando el signo de más (+): " + concatenationPlus);

//Se concatenan las variables anteriores usando la keyword concat en una nueva variable
let concatenationKey = friday.concat(" ", saturday, " ", sunday);
//Se muestra el resultado en consola
console.log("Concatenación usando la keyword concat: " + concatenationKey)