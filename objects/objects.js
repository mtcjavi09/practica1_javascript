/*  
    objects.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 06 de enero de 2023.
    File donde estoy practicando la definición y el uso de los objetos en JavaScript.
*/

//Creando mi primer objeto en JavaScript y asignando valores a sus propiedades
let object1 = {}; //El objeto está vacío
//  Se agregan valores a las propiedades del objeto
object1.property1 = "MASHA";
object1.property2 = "TCHIJOV";
//  Se muestra en consola el objeto creado
console.log("Mi primer objeto:", object1);

//Se crea un nuevo objeto con sus propiedades y valores definidos desde el inicio
let object2 = {
    nombre : "MARIA",
    apellido : "TCHIJOV CRUZ",
    carrera : "ICA",
    edad : 20,
    semestre: 8,
    displayName(){
        //Se utilizará una mejor práctica de concatenación en un string
        console.log(`El nombre completo del (la) estudiante es ${this["nombre"]} ${this["apellido"]}`);
    },
    displayProperty(property){
        //A partir del string que indique el usuario es la propiedad que se mostrará en consola
        console.log(`La propiedad a mostrar es ${property} y su valor es ${this[property]}`);
    }
};
//  Se agrega una nueva propiedad al objeto 2
object2.grupo = 402;

//  La BRACKET NOTATION es la única que puede llamar y modificar a:
//      1. Las propiedades que tienen un número como nombre
//      2. Las propiedades que son llamadas de forma dinámica a través de una variable
//  NOTA: cuando deseas llamar a una propiedad SIN USAR UNA VARIABLE, tienes que agregar comillas
object2["7"] = "BANGTAN SONYEONDAN";

//  Se muestra el objeto completo en consola
console.log("Objeto 2:", object2);
//  Se llama a la función del objeto 2 que muestra el nombre
object2.displayName();
//  Se llama a la función del objeto 2 que muestra la propiedad deseada por el usuario
let propiedadDeseada = "7";
object2.displayProperty(propiedadDeseada);