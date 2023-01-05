/*  
    substring.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 04 de enero de 2023.
    File donde estoy practicando los métodos de substring en JavaScript.
*/

//Se declara e inicializa la variable en la cual se realizará la búsqueda de substrings
let str1 = "after all this time? always";

//Se declara e inicializa la variable que contiene una palabra que será buscada dentro de str1
let search1 = "always";

//LENGTH muestra el número de caracteres que tiene un string
console.log("El número de caracteres de str1 es", str1.length);

//INDEXOF busca en qué índice de un string se encuentra el caracter o palabra buscada
//  Puedes definir el índice desde el cual deseas iniciar tu búsqueda usando su segundo argumento
//  De igual forma puedes conocer qué caracter se encuentra en un índice en específico
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

//SLICE funciona exactamente igual que substring
//  La única diferencia es que slice acepta índices negativos
//  Los índices negativos empiezan en -1
console.log(str1.slice(-search1.length));

//Para extraer sólo un caracter de un string puedes utilizar charAt o tratar al string como un array
console.log("Extracción de '?' con charAt:",str1.charAt(str1.indexOf('?')));
console.log("Extracción de '?' tratando a str1 como array:", str1[str1.indexOf('?')]);

//Se crea e inicializa una nueva variable para guardar el resultado de str1 al revés
let reverse = "";

//Se usa el ciclo for para mostrar caracter por caracter en pantalla y hacer reversible el string
for (let i = 0; i <= (str1.length)-1 ; i++) {
    //Se muestra caracter por caracter en pantalla
    console.log(str1[i]);
    //Se usa la variable reverse para hacer reversible el string guardado
    reverse = str1[i].concat(reverse);
}

//Se muestra el resultado de str1 al revés
console.log("Frase al revés:",reverse);

//Se usa REGEX para reemplazar algunos caracteres de la frase original y se muestra el resultado
let replaced = str1.replace(/a/gi, '4');
console.log("Frase cambiada:", replaced);

//SEARCH tiene el mismo propósito que INDEXOF, pero acepta REGEX y no permite agregar un punto de partida
console.log("El caracter especial se encuentra en el índice", str1.search(/[^A-Za-z0-9 ]/));

//MATCH permite mostrar todos los resultados que cumplan con la condición mostrada en la REGEX
console.log("Los dígitos que hay en la frase cambiada son:", replaced.match(/\d/g));

//SPLIT permite convertir un string en un array utilizando un delimitador para dividirlo
//  El delimitador puede ser un caracter, dígito, palabra o frase; también puede ser una REGEX
console.log("Frase convertida en array:", str1.split(' '));