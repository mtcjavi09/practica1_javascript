/*  
    substring.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 04 de enero de 2023.
    File donde estoy practicando la búsqueda dentro de un string en JavaScript.
*/

//Se declara e inicializa la variable en la cual se realizará la búsqueda de substrings
let str1 = "after all this time? always";

//Se declara e inicializa la variable que contiene una palabra que será buscada dentro de str1
let search1 = "always";

//LENGTH muestra el número de caracteres que tiene un string
console.log("El número de caracteres de str1 es", str1.length);

//INDEXOF busca en qué índice de un string se encuentra el caracter o palabra buscada
//  Puedes definir el índice desde el cual deseas iniciar tu búsqueda usando su segundo argumento
//  De igual forma puedes conocer qué letra se encuentra en un índice en específico
console.log("La letra 'j' se encuentra en el índice", str1.indexOf('j'), "de str1");

//LASTINDEXOF busca en qué índice se encuentra la última letra o palabra que está repetida
console.log("La última vez que se repite la letra 'a' en str1 es en el índice", str1.lastIndexOf('a'));

//INCLUDES ayuda a verificar si un substring está presente dentro de un string principal
console.log("¿La palabra de la variable search1 se encuentra en str1?", str1.includes(search1));

//Se declara e inicializa una nueva variable que contiene la palabra que se encuentra al principio de str1
let search2 = "after";

//STARTSWITH ayuda a verificar si un substring está presente al inicio de un string principal
console.log("¿La palabra 'after' se encuentra al incio de str1?", str1.startsWith(search2));

//ENDSWITH ayuda a verificar si un substring está presente al final de un string principal
console.log("¿'always' es la palabra final de str1?", str1.endsWith(search1));

//SUBSTR ayuda a cortar un string indicando el número de índice y el tamaño del recorte
//  Si no agregas el tamaño, comenzará el recorte desde el índice indicado hasta el final del string
console.log(str1.substr(0,search2.length));

//SUBSTRING ayuda a cortar un string indicando el índice inicial y el índice final del recorte
//  El segundo argumento también es opcional, por lo que si no se agrega pasará lo mismo que con substr
console.log(str1.substring(str1.indexOf(search1))); //En este ejemplo no se agregó el segundo argumento