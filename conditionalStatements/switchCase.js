/*  
    switchCase.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 29 de diciembre de 2022.
    File donde estoy practicando el uso del switch-case en mi código de JavaScript.
*/

//Se declara e inicializa la key variable del switch
let operation = 1;

//Se declaran 2 variables numéricas para realizar la operación elegida
let num1 = 200;
let num2 = 50;

//Se elige la operación con ayuda del swith-case
switch (operation) {
    case 1: //Suma
        console.log("El resultado de la suma es: ",(num1+num2));
        break;
    case 2: //Resta
        console.log("El resultado de la resta es: ",(num1-num2));
        break;
    case 3: //Multiplicación
        console.log("El resultado de la multiplicación es: ",(num1*num2));
        break;
    case 4: //División
        console.log("El resultado de la división es: ",(num1/num2));
        break;
    default:
        console.log("Operación no válida");
        break;
}