// Referencias:
const txtUsuario = document.getElementById("txtUsuario");
const txtNombre = document.getElementById("txtNombre");
const txtContraseña = document.getElementById("txtContraseña");
const txtContraseña2 = document.getElementById("txtContraseña2");
const errorUsuario = document.getElementById("errorUsuario");
const errorNombre = document.getElementById("errorNombre");
const errorContraseña = document.getElementById("errorContraseña");
const errorContraseña2 = document.getElementById("errorContraseña2");
const btnEnviar = document.getElementById("btnEnviar");
const bannerConfirmacion = document.getElementById("bannerConfirmacion");

// Funciones:
function validarUsuario() {
  let usuario = txtUsuario.value;
  let expRegUsuario = new RegExp("^[a-zA-Z0-9_]{4,16}$");
  if (expRegUsuario.test(usuario)) {
    errorUsuario.innerHTML = "";
    return true;
  } else {
    errorUsuario.innerHTML =
      "El usuario tiene que ser de 4 a 16 dígitos y  solo puede contener numeros, letras y guion bajo";
    return false;
  }
}

function validarNombre() {
  let nombre = txtNombre.value;
  let expRegNombre = new RegExp("^[a-zA-Z]{1,}$");
  if (expRegNombre.test(nombre)) {
    errorNombre.innerHTML = "";
    return true;
  } else {
    errorNombre.innerHTML =
      "El nombre solo puede contener letras y no puede estar vacio";
    return false;
  }
}

function validarContraseñas() {
  let contraseña = txtContraseña.value;
  let contraseña2 = txtContraseña2.value;

  if (contraseña.length === 0 || contraseña2.length === 0) {
    if (contraseña.length === 0) {
      errorContraseña.innerHTML = "La contraseña no puede estar vacia";
      return false;
    } else {
      errorContraseña.innerHTML = "";
    }
    if (contraseña2.length === 0) {
      errorContraseña2.innerHTML = "La contraseña no puede estar vacia";
      return false;
    } else {
      errorContraseña2.innerHTML = "";
    }
  }

  if (contraseña === contraseña2) {
    errorContraseña2.innerHTML = "";
    return true;
  } else {
    errorContraseña.innerHTML = "";
    errorContraseña2.innerHTML = "Ambas contraseñas deben ser iguales";
    return false;
  }
}

function validarFormulario() {
  let formUsuario = validarUsuario();
  let formNombre = validarNombre();
  let formContraseña = validarContraseñas();
  if (formUsuario && formNombre && formContraseña) {
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

txtUsuario.addEventListener("input", validarUsuario);
txtNombre.addEventListener("input", validarNombre);
txtContraseña.addEventListener("input", validarContraseñas);
txtContraseña2.addEventListener("input", validarContraseñas);