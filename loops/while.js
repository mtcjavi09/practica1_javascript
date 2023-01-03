/*  
    while.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 02 de enero de 2023.
    File donde estoy practicando el uso de los ciclos while y do...while en JavaScript.
*/

//Se declara e inicializa la variable que será la base de ambos ciclos
let a = 100;

//El ciclo while evalúa la condición antes de la ejecución
//Si la condición es false desde el inicio, no se ejecuta

//Se usa el ciclo while para imprimir el valor de 'a' y restar 10 hasta que la condición sea false
while (a > 10) {
    //Impresión del valor de 'a'
    console.log("El valor de 'a' es: ", a);
    //Decremento del valor de 'a'
    a -= 10;
}

//Se imprime un mensaje indicando que el ciclo while ha finalizado
console.log("Ciclo while finalizado.");

//El ciclo do...while evalúa la condición después de la ejecución
//Se ejecuta al menos una vez aunque la condición sea false desde el principio

//Se usa el ciclo do...while para imprimir el valor de 'a' y restar 10 hasta que la condición sea false
do {
    //Impresión del valor de 'a'
    console.log("El valor de 'a' es: ", a);
    //Decremento del valor de 'a'
    a -= 10;
} while (a > 10);

//Se imprime un mensaje indicando que el ciclo do...while ha finalizado
console.log("Ciclo do...while finalizado.");