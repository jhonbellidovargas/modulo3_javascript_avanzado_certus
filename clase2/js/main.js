// Estrucutras condicionales
// Ejemplo 01
let mostrarMensaje = true;
if (mostrarMensaje == true) {
  alert("Hola mundo!");
}

// ejemplo 02
let edad = 15;
if (edad >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("Eres menor de edad");
}

// ejemplo 03

if (edad < 12) {
  alert("Eres muy pequeño");
} else if (edad < 19) {
  alert("Eres adolecente");
} else if (edad < 35) {
  alert("Eres joven");
} else {
  alert("Eres adulto");
}

// ejemplo 04
let num = 1;
switch (num) {
  case 1:
    alert("Lunes");
    break;
  case 2:
    alert("Martes");
    break;
  case 3:
    alert("Miercoles");
    break;
  case 4:
    alert("Jueves");
    break;
  case 5:
    alert("Viernes");
    break;
  case 6:
    alert("Sabado");
    break;
  case 7:
    alert("Domingo");
    break;
  default:
    alert("Numero equivocado");
}

// Ejemplos bucles while y do while

// Ejemplo While

// ¿Porque se ejeucto el mensaje de Do while y no el mensaje del while?

let n = 10;
while (n < 10) {
  alert("Mensaje desde Bucle While - Valor de n: " + n);
  n++;
}

n = 10;
do {
  alert("Mensaje desde Bucle Do while - Valor de n: " + n);
  n++;
} while (n < 10);
