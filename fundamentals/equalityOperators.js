/*  
    equalityOperators.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 27 de diciembre de 2022.
    File donde estoy practicando los operadores de igualdad básicos de JavaScript.
*/

//Se declaran e inicializan dos variables
let varA = 100;
let varB = "100";

// Se utilizan los operadores de igualdad y desigualdad estrictos y no estrictos
//Operador de igualdad no estricto, sólo compara el valor
console.log("¿Los valores son iguales? ",varA == varB); 
//Operador de igualdad estricto, compara el valor y el tipo
console.log("¿Los valores y el tipo son iguales? ", varA === varB);
//Operador de desigualdad no estricto, sólo compara el valor
console.log("¿Los valores son diferentes? ",varA != varB);
//Operador de desigualdad estricto, compara el valor y el tipo
console.log("¿Los valores y/o el tipo diferentes? ",varA !== varB);