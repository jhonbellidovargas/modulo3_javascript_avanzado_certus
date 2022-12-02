// Referencias:
const txtNombre = document.getElementById("txtNombre");
const txtApellido = document.getElementById("txtApellido");
const txtEmail = document.getElementById("txtEmail");
const txtTelefono = document.getElementById("txtTelefono");
const txtMensaje = document.getElementById("txtMensaje");
const btnEnviar = document.getElementById("btnEnviar");
const errorNombre = document.getElementById("errorNombre");
const errorApellido = document.getElementById("errorApellido");
const errorEmail = document.getElementById("errorEmail");
const errorTelefono = document.getElementById("errorTelefono");
const errorMensaje = document.getElementById("errorMensaje");

// Funciones:
function validarNombres(){
  let nombre = txtNombre.value;
  let expRegNombre = new RegExp("^[a-zA-Z ]{1,}$");
  if (expRegNombre.test(nombre)) {
    errorNombre.innerHTML = "";
    return true;
  } else {
    errorNombre.innerHTML = "El nombre solo puede contener letras y no puede estar vacio";
    return false;
  }
}

function validarApellidos(){
  let apellido = txtApellido.value;
  let expRegApellido = new RegExp("^[a-zA-Z ]{1,}$");
  if (expRegApellido.test(apellido)) {
    errorApellido.innerHTML = "";
    return true;
  } else {
    errorApellido.innerHTML = "El apellido solo puede contener letras y no puede estar vacio";
    return false;
  }
}

function validarEmail(){
  let email = txtEmail.value;
  let expRegEmail = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$");
  if (expRegEmail.test(email)) {
    errorEmail.innerHTML = "";
    return true;
  } else {
    errorEmail.innerHTML = "El email no es valido";
    return false;
  }
}

function validarTelefono(){
  let telefono = txtTelefono.value;
  let expRegTelefono = new RegExp("^[0-9]{9}$");
  if (expRegTelefono.test(telefono)) {
    errorTelefono.innerHTML = "";
    return true;
  } else {
    errorTelefono.innerHTML = "El telefono no es valido";
    return false;
  }
}

function validarMensaje(){
  let mensaje = txtMensaje.value;
  let expRegMensaje = new RegExp("^[a-zA-Z0-9 ]{1,}$");
  if (expRegMensaje.test(mensaje)) {
    errorMensaje.innerHTML = "";
    return true;
  } else {
    errorMensaje.innerHTML = "El mensaje no puede estar vacio";
    return false;
  }
}

function validarFormulario(){
  validarNombres();
  validarApellidos();
  validarEmail();
  validarTelefono();
  validarMensaje();
  if (validarNombres() && validarApellidos() && validarEmail() && validarTelefono() && validarMensaje()) {
    return true;
  } else {
    return false;
  }
}

// Eventos:
btnEnviar.onclick = function () {
  if (validarFormulario()) {
    bannerConfirmacion.classList.remove("d-none");
  } else {
    bannerConfirmacion.classList.add("d-none");
  }
};

txtNombre.addEventListener("input", validarNombres);
txtApellido.addEventListener("input", validarApellidos);
txtEmail.addEventListener("input", validarEmail);
txtTelefono.addEventListener("input", validarTelefono);
txtMensaje.addEventListener("input", validarMensaje);