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
console.log("Hay", integers.length, "elementos en el array 'integers'.");
console.log("Hay", WEEK.length, "elementos en el array 'WEEK'.\n");