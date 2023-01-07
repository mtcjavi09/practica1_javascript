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
    semestre: 8
};
//  Se muestra el objeto completo en consola
console.log("Objeto 2:", object2);
console.log("Nombre completo:", object2.nombre, object2.apellido);