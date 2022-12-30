/*  
    logicalAndComparisonOperators.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 28 de diciembre de 2022.
    File donde estoy practicando los operadores lógicos y de comparación en JavaScript.
*/

//Se declaran e inicializan dos variables
let varA = true;
let varB = false;

//Se utilizan los operadores lógicos
//AND   : Si ambas condiciones son verdaderas, el valor será true
console.log("¿Las variables tienen el mismo valor? ",varA&&varB);
//OR    : Si una de las condiciones es verdadera, el valor será true
console.log("¿Una de las variables tiene el valor true? ",varA||varB);
//NOT   : Invierte la condición (si es true, el resultado será false y viceversa)
console.log("Valor invertido de varA: ",!varA);

//Se declaran e inicializan dos nuevas variables
let varX = 100;
let varY = 200;

//Se utilizan los operadores de comparación
console.log("¿varX es mayor que varY? ",varX>varY);
console.log("¿varX es menor que varY? ",varX<varY);
console.log("¿varX es mayor o igual que varY? ",varX>=varY);
console.log("¿varX es menor o igual que varY? ",varX<=varY);