// Ejercicio 1
const numero = document.getElementById("numero");
const btnCalcular = document.getElementById("btnCalcular");
const pResultado = document.getElementById("pResultado");

btnCalcular.onclick = () => {
  const numeroIngresado = numero.value;
  let digito1 = numeroIngresado[0];
  let digito2 = numeroIngresado[1];
  let digito3 = numeroIngresado[2];

  if (numeroIngresado.length === 3) {
    if (digito1 === digito2 && digito1 === digito3) {
      let sumaRaices =
        Math.sqrt(parseInt(digito1)) +
        Math.sqrt(parseInt(digito2)) +
        Math.sqrt(parseInt(digito3));
      pResultado.innerText = `La suma de las raices es: ${sumaRaices}`;
    } else {
      let sumaCuadrados =
        Math.pow(parseInt(digito1), 2) +
        Math.pow(parseInt(digito2), 2) +
        Math.pow(parseInt(digito3), 2);
      pResultado.innerText = `La suma de los cuadrados es: ${sumaCuadrados}`;
    }
  } else {
    pResultado.innerText = "El numero ingresado no tiene 3 digitos";
  }
};

// Ejercicio 2
const contrasenia = document.getElementById("contrasenia");
const btnValidar = document.getElementById("btnValidar");
const pResultado2 = document.getElementById("pResultado2");

function validarContrasenia(contrasenia) {
  // expresiones regulares
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
  if (contrasenia.match(regex)) {
    return true;
  } else {
    return false;
  }
}

btnValidar.onclick = () => {
  const contraseniaIngresada = contrasenia.value;
  if (validarContrasenia(contraseniaIngresada)) {
    pResultado2.innerText = "La contraseña es valida";
  } else {
    pResultado2.innerText = "La contraseña no es valida";
  }
};

// Ejercicio 3

const correo = document.getElementById("correo");
const btnValidarCorreo = document.getElementById("btnValidarCorreo");
const pResultado3 = document.getElementById("pResultado3");

function validarCorreo(correo) {
  const regex = /^[a-zA-Z0-9._-]+@certus.edu.pe$/;
  if (correo.match(regex)) {
    return true;
  } else {
    return false;
  }
}

btnValidarCorreo.onclick = () => {
  const correoIngresado = correo.value;
  if (validarCorreo(correoIngresado)) {
    pResultado3.innerText = "El correo es valido";
  } else {
    pResultado3.innerText = "El correo no es valido";
  }
}
