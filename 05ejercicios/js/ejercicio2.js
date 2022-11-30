// CREAR UN APLICACION QUE PERMITA CAMBIO DE MONEDA DE SOLES A DOLARES
// iNGRESAE U IMPORTE EN SOLES Y MUESTRE SU EQUIBVALENTE EN DOLARES
// CREAR UN APLICACION QUE PERMITA CAMBIO DE MONEDA DE DOLARES A SOLES
// iNGRESAE U IMPORTE EN DOLARES Y MUESTRE SU EQUIBVALENTE EN SOLES

const numeroSoles = document.getElementById("numeroSoles");
const valorDolares = document.getElementById("valorDolares");

const numeroDolares = document.getElementById("numeroDolares");
const valorSoles = document.getElementById("valorSoles");

function convertirDolares() {
  let soles = 0;
  let dolares = 0;
  soles = parseFloat(numeroSoles.value);
  dolares = soles / 3.84;
  valorDolares.value = dolares.toFixed(2);
}
function convertirSoles() {
  let soles = 0;
  let dolares = 0;
  dolares = parseFloat(numeroDolares.value);
  soles = dolares * 3.84;
  valorSoles.value = soles.toFixed(2);
}

numeroSoles.onkeyup = function () {
  convertirDolares();
};

numeroSoles.onchange = function () {
  convertirDolares();
};

numeroDolares.onkeyup = function () {
  convertirSoles();
};

numeroDolares.onchange = function () {
  convertirSoles();
};
