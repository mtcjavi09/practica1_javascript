/*  
    arrays.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 11 de enero de 2023.
    File donde estoy practicando la definición y el uso de los arrays en JavaScript.
*/

//Se crea un array de integers y otro de strings
let integers = [1,2,3,4,5,4]; //Array como variable
const WEEK = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]; //Array como constante

//Se corrige el último valor dentro del array integers
integers[5] = 6;

//Se muestran en consola ambos arrays
console.log("Array 'integers':", integers,"\nArray 'WEEK':", WEEK,"\n");

//Se muestra en consola el valor del índice 6 en ambos arrays
console.log("Índice 6 en array 'integers':", integers[6]);
console.log("Índice 6 en array 'WEEK':", WEEK[6], "\n");

//Se muestra en consola el número de elementos de ambos arrays
console.log("Hay", integers.length, "elementos en el array 'integers'");
console.log("Hay", WEEK.length, "elementos en el array 'WEEK'\n");

//Se agregan y eliminan elementos al inicio y al final del array integers, mostrando los cambios en consola
integers.push(7,8,9,10,11); //Se agregan los elementos al final
integers.unshift(-1); //Se agrega el elemento al inicio

//Se muestran los cambios
console.log("Array 'integers' actualizado:", integers, "\n");
console.log("Ahora hay", integers.length, "elementos en el array 'integers'\n");

integers.pop(); //Se elimina el último elemento, en este caso el número 11
integers.shift(); //Se elimina el primer elemento, en este caso el número -1

//Se muestran los cambios
console.log("Array 'integers' final:", integers, "\n");
console.log("Al finalizar la ejecución, hay", integers.length, "elementos en el array 'integers'\n");

//Se crea un nuevo array para realizar más ejemplos de operaciones con los arrays
let planetas = ["MERCURIO", "VENUS", "TIERRA", "MARTE", "JÚPITER", "SATURNO", "URANO", "NEPTUNO"];

//Se realizan las operaciones de búsqueda en el array 'planetas' y se muestran los resultados en consola
console.log("¿TIERRA está presente en el array 'planetas'?", planetas.includes("TIERRA"));
console.log("El primer índice donde se encuentra VENUS en el array 'planetas' es", planetas.indexOf("VENUS"));
console.log("El índice al buscar MARTE desde el final del array 'planetas' es", planetas.lastIndexOf("MARTE"), "\n");

//Se utilizan más operaciones útiles para trabajar con el array 'planetas'
//  Se juntan todos los elementos del array utilizando un espacio como delimitador
console.log("Array 'planetas' convertido a string con JOIN: \n", planetas.join(" "), "\n");

//  Se convierte a string el array 'planetas' sin utilizar delimitador
const stringPlanetas = planetas.toString();
console.log("Array 'planetas' convertido a string con TOSTRING: \n", stringPlanetas, "\n");

//  Se vuelve a convertir el string a un array y se muestra el resultado en consola
planetas = stringPlanetas.split(",");
console.log("Array 'planetas:", planetas, "\n");

//  Se muestran sólo los primeros 4 planetas del sistema solar
console.log("Los primeros 4 planetas del sistema solar son:", planetas.slice(0,4), "\n");

//  Se invierte el orden del array y se muestra en consola el resultado
console.log("El orden invertido de los 8  planetas del sistema solar es:", planetas.reverse(), "\n");
//  Posteriormente, se vuelve al orden original
console.log("El orden original de los 8 planetas del sistema solar es:", planetas.reverse(), "\n");

//Se usa el for...of loop para iterar el array 'WEEK'
for (const iterator of WEEK) {
    console.log("Día",(WEEK.indexOf(iterator) + 1), "de la semana:", iterator);   
}

console.log("\n"); //Se agrega un espacio entre los resultados de cada ciclo for

//Se usa el for...each loop para iterar el array 'integers'
integers.forEach(element => {
    console.log("Multiplicación", integers.indexOf(element) + 1, ":", element, "* 2 =", element * 2);
});