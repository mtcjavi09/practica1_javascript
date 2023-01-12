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
integers.unshift(-1,0); //Se agregan los elementos al inicio

//Se muestran los cambios
console.log("Array 'integers' actualizado:", integers, "\n");
console.log("Ahora hay", integers.length, "elementos en el array 'integers'\n");

integers.pop(); //Se elimina el último elemento, en este caso el número 11
integers.shift(); //Se elimina el primer elemento, en este caso el número -1

//Se muestran los cambios
console.log("Array 'integers' final:", integers, "\n");
console.log("Al finalizar la ejecución, hay", integers.length, "elementos en el array 'integers'\n");