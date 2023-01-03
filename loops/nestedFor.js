/*  
    nestedFor.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 02 de enero de 2023.
    File donde estoy practicando el uso del nested for en JavaScript.
*/

//Se utilizará un nested for para imprimir 10 veces la serie de números del 10 al 100
for (let i = 1; i <= 10; i++) {
    console.log("Impresión ", i);
    for (let j = 10; j <= 100; j+=10) {
        console.log("Número: ", j);
    }    
}