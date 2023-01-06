/*  
    functions.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 05 de enero de 2023.
    File donde estoy practicando la definición y el uso de las funciones en JavaScript.
*/

//Función que suma dos números
function suma (num1, num2){
    let suma = num1 + num2;
    return suma;
}

//Función que muestra el abecedario con un ciclo for
function abecedario(){
    let abc = "ABCDEFJHIJKLMNÑOPQRSTUVWXYZ";
    for (let i = 0; i < abc.length; i++) {
        console.log(abc[i]);        
    }
}

//Se llaman a las funciones que han sido creadas y se muestran los resultados en consola
let result = suma(23,32);
console.log("La suma es:",result);
console.log(abecedario());