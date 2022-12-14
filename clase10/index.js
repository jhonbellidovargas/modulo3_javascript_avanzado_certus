class Person {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  hablar = () => {
    alert(`Hola me llamo ${this.nombre}`);
  };
}

class Student extends Person {
  constructor(nombre, edad, programa) {
    super(nombre, edad);
    this.programa = programa;
  }
  notas;
}

let armandito = new Student("Armandito", 25, "Developer");

class Animal {
  constructor(raza, color, edad, tamaño) {
    this.raza = raza;
    this.color = color;
    this.edad = edad;
    this.tamaño = tamaño;
  }
  comer = () => {
    console.log("Estoy comiendo");
  };
}

class Perro extends Animal {
  constructor(raza, color, edad, tamaño) {
    super(raza, color, edad, tamaño);
  }
  ladrar = () => {
    console.log("guau!");
  };
}

let animal2 = new Perro("Pug", "Beige", 2, 23);

animal2.raza = "Golden Retriever";

console.log(animal2);
