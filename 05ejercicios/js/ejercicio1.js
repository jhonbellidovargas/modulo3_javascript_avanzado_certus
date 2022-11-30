// Ejercicio1: Generar las 4 operaciones basicas (+, - , *, /) con los 2 numeros
// ingresados por los inputs del formulario, y mostrarlo en el DOM
// a travez de la etiqueta p (resultado)

// DATOS DE ENTRADA Y VARIABLES
// 1-> Seleccionar Elementos del DOM (p, h1, input, etc.)
const numero1 = document.getElementById("txtNumero1");
const numero2 = document.getElementById("txtNumero2");
const boton = document.getElementById("btnEnviar");
const numero3 = document.getElementById("txtNumero3");
const limpiar = document.getElementById("btnLimpiar");

const resultado = document.getElementById("resultado");

boton.onclick = function () {
  // 3-> Definir datos de entrada y variables para realizar el proceso
  let num1 = 0;
  let num2 = 0;
  let suma = 0;
  let resta = 0;
  let multi = 0;
  let divi = 0;
  // PROCESO
  // 2-> Identificar el proceso-> +, -, *, / los 2 numeros ingresados en los input
  // 4-> Implementar el proceso
  num1 = parseInt(numero1.value);
  num2 = parseInt(numero2.value);
  suma = num1 + num2;
  resta = num1 - num2;
  multi = num1 * num2;
  divi = num1 / num2;
  // Resultado
  resultado.innerText = "La suma es: " + suma;
  resultado.innerText += "\n La resta es: " + resta;
  resultado.innerText += "\n La multiplicacion es: " + multi;
  resultado.innerText += "\n La division es: " + divi.toFixed(2);
  numero3.value = suma;
  numero1.disabled = true;
  numero2.disabled = true;
  numero3.disabled = true;
};

limpiar.onclick = function () {
  numero1.value = "";
  numero2.value = "";
  numero3.value = "";
  numero1.disabled = false;
  numero2.disabled = false;
  numero3.disabled = false;
  resultado.innerText = "";
};
