/*  
    variablesInJavaScript.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 23 de diciembre de 2022.
    File donde estoy practicando la declaración, inicialización, impresión y cambios de las variables.
*/

//Declaración e inicialización de variable de tipo number usando let
//  La keyword let no te permite redeclarar una variable (como pasa con Java)
let num = 100;

//Declaración de variables de tipo string y boolean usando let
let str;
let boo;

//Cambio de valores de las variables str y boo
str = "Hello from a variable";
boo = true;

//Muestra del valor y tipo de la variable str
console.log("Mensaje de la variable str: ", str);
console.log("Tipo de la variable str: ", typeof(str));

//Declaración e inicialización de una variable usando la keyword var
//  La keyword var te permite redeclarar una variable
var change = 100; //Se declara como tipo number

//Muestra del valor y tipo inicial de la variable change
console.log("Valor de la varible change: ", change);
console.log("Tipo de la variable change: ", typeof(change));

//Se redeclara la variable change
var change = "I've changed my type"; //Se redeclara la variable change como string

//Muestra del valor y tipo final de la variable change
console.log("Valor de la varible change: ", change);
console.log("Tipo de la variable change: ", typeof(change));

//Declaración e inicialización de dos variables de tipo BigInt
let bigIntX = BigInt(16516984521574);
let bigIntY = 1484512459846512n;

//Muestra del valor y tipo de las variables bigIntX y bigIntY
console.log("Valor de la varible bigIntX: ", bigIntX);
console.log("Tipo de la variable bigIntX: ", typeof(bigIntX));

console.log("Valor de la varible bigIntY: ", bigIntY);
console.log("Tipo de la variable bigIntY: ", typeof(bigIntY));

//Declaración e inicialización de una variable de tipo symbol
let sym = Symbol('&');

//Muestra del valor y tipo de la variable sym
console.log("Valor de la variable sym: ",sym);
console.log("Tipo de la variable sym: ",typeof(sym));