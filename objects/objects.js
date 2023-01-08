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
console.log("\n*    *   *   mi primer objeto    *   *   *\n", object1);

//Se crea un nuevo objeto con sus propiedades y valores definidos desde el inicio
let object2 = {
    nombre: "MARIA",
    apellido: "TCHIJOV CRUZ",
    carrera: "ICA",
    edad: 21,
    semestre: 8,
    //Se agrega un nested object dentro de las propiedades del objeto 2
    direccion: {
        calle: "ENCINOS PONIENTE",
        numExterior: 32,
        colonia: "ATLANTA",
        municipio: "CUAUTITLÁN IZCALLI",
        estado: "EDOMEX",
        pais: "MEXICO",
        codigoPostal: 54750
    },
    displayName() {
        //Se utilizará una mejor práctica de concatenación en un string
        //THIS ayuda a referirse a las propiedades que se encuentran dentro del objeto actual
        console.log(`El nombre completo del (la) estudiante es ${this["nombre"]} ${this["apellido"]}`);
    },
    displayAdress() {
        console.log(`DIRECCIÓN: CALLE ${this["direccion"]["calle"]} NO.EXT.${this["direccion"]["numExterior"]} NO.INT.${this["direccion"]["numInterior"]} COLONIA ${this["direccion"]["colonia"]} ${this["direccion"]["municipio"]}, ${this["direccion"]["estado"]}, ${this["direccion"]["pais"]}. C.P. ${this["direccion"]["codigoPostal"]}.`);
    },
    displayProperty(property) {
        //A partir del string que indique el usuario es la propiedad que se mostrará en consola
        console.log(`La propiedad a mostrar es ${property} y su valor es ${this[property]}`);
    }
};

//  La BRACKET NOTATION es la única que puede llamar y modificar a:
//      1. Las propiedades que tienen un número como nombre
//      2. Las propiedades que son llamadas de forma dinámica a través de una variable
//  NOTA: cuando deseas llamar a una propiedad SIN USAR UNA VARIABLE, tienes que agregar comillas

//  Se agrega la propiedad '7' al objeto 2 usando bracket notations
object2["7"] = "BANGTAN SONYEONDAN";

//  Se cambia el valor del atributo semestre del objeto 2
object2["semestre"] = "8VO SEMESTRE";

//  Se muestra el objeto completo en consola
console.log("\n*    *   *   objeto 2    *   *   *\n", object2);

//  Se llama a la función del objeto 2 que muestra el nombre
console.log("\n*  *   *   nombre del estudiante   *   *   *");
object2.displayName();

//  Se llama a la función del objeto 2 que muestra la propiedad deseada por el usuario
let propiedadDeseada = "7";
console.log("\n*  *   *   selección de la propiedad dentro del objeto 2   *   *   *");
object2.displayProperty(propiedadDeseada);

//  Se agrega la propiedad 'grupo' y se elimina la propiedad '7' en el objeto 2
object2["grupo"] = 402;
delete object2["7"];

//  Se agrega el argumento de numExterior en el subobjeto dirección del objeto 2
object2["direccion"]["numInterior"] = "N/A";

// Se llama a la función del objeto 2 que muestra la dirección
console.log("\n*  *   *   dirección del estudiante    *   *   *");
object2.displayAdress();

//  Se muestra el objeto modificado en consola
console.log("\n*    *   *   objeto 2 modificado *   *   *\n", object2);

//Se crea un nuevo objeto que contiene elementos de la tabla periódica
let tablaPeriodica = {
    H : "HIDRÓGENO",
    He : "HELIO",
    Li : "LITIO",
    Be : "BERILIO",
    B : "BORO",
    C : "CARBÓN",
    N : "NITRÓGENO",
    O : "OXÍGENO"
}

//  Se utiliza el for...in loop para iterar las propiedades del objeto de la tabla periódica
console.log("\n*    *   *   elementos de la tabla periódica *   *   *");
for (const key in tablaPeriodica) {
    console.log(`${key}: ${tablaPeriodica[key]}`);
}