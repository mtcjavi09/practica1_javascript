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

//Se crean dos objetos a partir del constructor y se muestran en consola
let student1 = new Student("MARIA TCHIJOV CRUZ", "2820643", "mashatc@gmail.com", 21, 
        "CUAUTITLÁN IZCALLI", "ICA", "8° SEM");
let student2 = new Student("ARMIDA MICHELLE VELÁZQUEZ ESQUEDA", "2845577", "michellevelazqueda@gmail.com", 21,
        "CUAUTITLÁN IZCALLI", "ICA", "8° SEM");

console.log(student1, "\n", student2, "\n");