/*  
    breakAndContinue.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 02 de enero de 2023.
    File donde estoy practicando el uso de las keywords break y continue en los loops de JavaScript.
*/

//Se declara e inicializa una variable para el ciclo while
let a = 10;

//Se crea el ciclo while y se usa la keyword break para terminar el ciclo cuando el valor de 'a' sea 50
while (a < 100) {
    //Se imprime el valor de 'a'
    console.log("Valor de 'a': ", a);
    //Se suma 10 al valor de 'a'
    a+=10;
    //Se agrega una condición para usar break
    //break se encarga de terminar abruptamente el loop aunque la condición original siga siendo true
    if (a == 50) {
        break; //Termina el ciclo 
    }
}

//Se agrega un mensaje para indicar que el ciclo while con break ha finalizado
console.log("Ciclo while con break finalizado.");

//Se regresa la variable 'a' a su valor original
a = 10;

//Se crea el ciclo while y se usa la keyword continue para interrumpir el ciclo cuando 'a' sea 50
while (a < 100) {
    //Se suma 10 al valor de 'a'
    a+=10;
    //Se agrega una condición para usar continue
    //continue interrumpe la ejecución según la condición
    //El loop continuará hasta cumplir con su condición original
    if (a == 50) {
        continue; //Interrumpe sólo la ejecución que cumpla con la condición
    }
    //Se imprime el valor de 'a'
    console.log("Valor de 'a': ", a);
}


//Se agrega un mensaje para indicar que el ciclo while con continue ha finalizado
console.log("Ciclo while con continue finalizado.");