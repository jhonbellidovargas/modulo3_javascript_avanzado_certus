let usuarios = ["jperez", "amaria"];
let contraseña = ["123456", "certus123"];

const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const respuesta = document.getElementById("respuesta");
const alerta = document.getElementById("alerta");

btnLogin.onclick = function () {
  let usuarioValor = usuario.value;
  let passwordValor = password.value;

  if (usuarios.includes(usuarioValor)) {
    if (contraseña[usuarios.indexOf(usuarioValor)] === passwordValor) {
      respuesta.innerHTML = "Datos ingresados correctamente";
      alerta.classList.remove("alert-danger");
      alerta.classList.add("alert-success");
    } else {
      respuesta.innerHTML = "Contraseña incorrecta";
      alerta.classList.remove("alert-success");
      alerta.classList.add("alert-danger");
    }
  } else {
    respuesta.innerHTML = "Usuario incorrecto";
    alerta.classList.remove("alert-success");
    alerta.classList.add("alert-danger");
  }
  alerta.classList.add("d-block");
  alerta.classList.remove("d-none");
  setTimeout(() => {
    alerta.classList.add("d-none");
    alerta.classList.remove("d-block");
  }, 5000);
};
