/*  
    undefinedVsNull.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 27 de diciembre de 2022.
    File donde estoy comprendiendo los conceptos de undefined y null a través de la práctica.
*/

//UNDEFINED en JavaScript es el tipo de variable que ha sido declarada, pero no inicializada
//  Recuerda que JS elije el tipo de variable dependiendo del valor que le es asignado
//Se declara una variable de tipo undefined
let und;
//Se muestran los valores y el tipo de la variable en consola
console.log("Valor de und: ",und);
console.log("Tipo de und: ",typeof(und))

//NULL en JavaScript es un valor que puede tener una variable
//  La variable que contenga ese valor será tratada como un objeto vacío
//Se declara una variable con el valor null
let obj = null;
//Se muestran los valores y el tipo de la variable en consola
console.log("Valor de obj: ",obj);
console.log("Tipo de obj: ",typeof(obj))