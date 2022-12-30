/*  
    arithmeticOperators.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 27 de diciembre de 2022.
    File donde estoy practicando los operadores aritméticos básicos de JavaScript.
*/

//Se declaran dos variables con números diferentes y se muestran sus valores en consola
let num1 = 20;
let num2 = 5;

console.log("Valor inicial de num1: ", num1);
console.log("Valor inicial de num2: ", num2);

//Se declaran nuevas variables y se inicializan con su respectiva operación
let mod = num1 % num2; //Encuentra el valor restante de una división
let pow = num1 ** num2; //Eleva el número de la primera variable a la potencia de la segunda variable

//Se hacen cambios en los valores de num1 y num2 usando los operadores
num1++; //Se aumenta 1 al valor de num1
num2 *= 10; //Se multiplica el valor de num2 por 10 y se asigna a la misma varible

//Se muestran los resultados finales en consola
console.log("Resultado de la operación mod: ", mod);
console.log("Resultado de la operación pow: ", pow);
console.log("Valor final de num1: ", num1);
console.log("Valor final de num2: ", num2);