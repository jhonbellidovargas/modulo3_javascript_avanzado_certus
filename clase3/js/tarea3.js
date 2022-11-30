const numero = document.getElementById("numero");
const btnCalcular = document.getElementById("btnCalcular");
const respuesta = document.getElementById("respuesta");
console.log('numero.value');
btnCalcular.onclick = function () {
  console.log(numero.value);
  let n = Number(numero.value);
  let primo = true;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      primo = false;
      break;
    }
  }
  if (primo) {
    respuesta.innerHTML = "Es primo";
  } else {
    respuesta.innerHTML = "No es primo";
  }
};
