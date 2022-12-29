/*  
    bitwiseOperations.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 28 de diciembre de 2022.
    File donde estoy practicando las operaciones binarias en JavaScript.
*/

//Se declaran e inicializan dos variables numéricas
let varA = 50;
let varB = 100;

//Comienzan las operaciones binarias
console.log("Operación AND  : ",varA&varB); //Sólo si los dos bits son 1, el resultado es 1
console.log("Operación OR   : ",varA|varB); //Sólo si los dos bits son 0, el resultado es 0
console.log("Operación XOR  : ",varA^varB); //Sólo si uno de los bits es 1, el resultado es 1
console.log("Operación NOT  : ",~varA); //Convierte los 0s a 1s y los 1s a 0s de la variable elegida