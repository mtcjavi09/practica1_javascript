/*  
    ifConditionalStatement.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 29 de diciembre de 2022.
    File donde estoy practicando el uso de la condición if en mi código de JavaScript.
*/

//Se declaran e inicializan tres variables numéricas
let num1 = 100;
let num2 = 300;
let num3 = 500;

//Se define cúal es el número mayor utilizando ifs condicionales
if ((num1>num1) && (num1>num3)) //Si num1 es el número mayor, se ejecuta el siguiente código
{console.log("num1 es el número mayor");}
else if(num2>num3) //Si num2 es el número mayor, se ejecuta el siguiente código
{console.log("num2 es el número mayor");}
else //Si num3 es el número mayor, se ejecuta el siguiente código
{console.log("num3 es el número mayor");}

//Se agrega un mensaje para que aparezca por default en la salida
console.log("Programa finalizado");