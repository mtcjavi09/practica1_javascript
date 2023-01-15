/*  
    advancedObjects.js
    AUTORA  : Maria Tchijov Cruz.
    FECHA   : 13 de enero de 2023.
    File donde estoy practicando operaciones avanzadas de los objetos en JavaScript.
*/

//Se declara un constructor para crear un objeto donde se guardarán los datos de un estudiante
function Student(nombre, matricula, correo, edad, direccion, carrera, semestre){
    this["name"] = nombre;
    this["studentNumber"] = matricula;
    this["email"] = correo;
    this["age"] = edad;
    this["adress"] = direccion;
    this["program"] = carrera;
    this["semester"] = semestre;
}

//Se crea un objeto a partir del constructor y se muestra el resultado en consola
let student1 = new Student("MARIA TCHIJOV CRUZ", "2820643", "mashatc@gmail.com", 21, "CUAUTITLÁN IZCALLI", "ICA", "8° SEM");

console.log("Estudiante 1:", student1, "\n");

//Se usa la forma rápida de crear objetos sin funciones ni constructor y se muestra el resultado en consola
let car = new Object({
    marca: "HONDA",
    modelo: "ACCORD",
    año: 2007,
    color: "GRIS OXFORD"
});

console.log("Objeto creado usando INSTANCE:", car, "\n");

//Se crea un constructor para dar de alta una dirección, el cual también se utilizará como función normal

//  Se utilizará la herramienta new.target para diferenciar la ejecución
function Address(calle, numExt, numInt, ciudad, estado, pais, codigoPostal){
    //Si se llama sin la 'new' keyword, se regresa un string con la dirección
    if (!new.target){
        let direccion = "";
        direccion = direccion.concat("Calle ", calle, " N°. ", numExt, " ",  numInt,  " ", ciudad, ", ", estado, ", ", pais, ". C.P. ", codigoPostal);
        return direccion;
    }
    //Si se llama con la 'new' keyword, se crea el objeto Adress
    this["street"] = calle,
    this["number"] = numExt;
    this["department"] = numInt,
    this["city"] = ciudad,
    this["state"] = estado,
    this["country"] = pais,
    this["postCode"] = codigoPostal
}

//  Se hacen dos ejecuciones de la función address para probar ambos casos y se muestra el resultado
let address1 = Address("Perales", "21","","Cuautitlán Izcalli","México","México","54740");
let address2 = new Address("Nogales", "32", "23B", "Toluca", "México", "México", "57523");

console.log(address1, "\n");
console.log(address2, "\n");

//Se realiza la prueba del método CALL para llamar una función perteneciente a un objeto
//  CALL permite referenciar el objeto desde el cual se quiere ejecutar la función

//  Se crea un objeto de una cuenta bancaria con una función para aumentar la cantidad disponible
let account = {
    name: "Maria",
    number: 643,
    amount: 100,
    addAmount: function(amount){
        this["amount"] += amount;
    }
}

//  Se crea el objeto para el gerente responsable de la cuenta, haciendo referencias al objeto 'account'
let manager = {
    name: "Sara",
    managedAccount: account["number"],
    addAmount: account["addAmount"]
}

//  Se ejecuta la función addAmount del objeto 'account' desde el objeto 'manager'
manager["addAmount"].call(account, 500);

//  Se muestran en consola el objeto 'manager' y el objeto 'account'
console.log("Manager:\n", manager, "\n\nAccount:\n", account, "\n")