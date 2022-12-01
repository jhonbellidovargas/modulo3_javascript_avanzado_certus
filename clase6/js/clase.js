// Validacion de los campos del formulario

// Elementos del DOM a utilizara AASDASasd3423fsdfds

const nombre = document.getElementById("txtNombre");
const valnombre = document.getElementById("valNombre");

const dni = document.getElementById("txtDni");
const valdni = document.getElementById("valDni");

const correo = document.getElementById("txtCorreo");
const valcorreo = document.getElementById("valCorreo");

const pais = document.getElementById("selPais");
const valpais = document.getElementById("valPais");

const chkaceptar = document.getElementById("chkAceptar");
const valaceptar = document.getElementById("valAceptar");

const btnEnviar = document.getElementById("btnEnviar");

function Validar() {
  let nom = nombre.value;
  let expRegNom = new RegExp("^[A-Za-z]*$");
  valnombre.innerText = "";

  let idni = dni.value;
  let expRegDni = new RegExp("^[0-9]{8}$");
  valdni.innerText = "";

  let icorreo = correo.value;
  let expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  valcorreo.innerText = "";

  valpais.innerText = "";

  if (idni == "" || !expRegDni.test(idni)) {
    valdni.innerText = "Dni invalido";
  }
  if (nom == "" || !expRegNom.test(nom)) {
    valnombre.innerText = "Nombre invalido";
  }
  if (icorreo == "" || !expRegEmail.test(icorreo)) {
    valcorreo.innerText = "Correo invalido";
  }

  if (pais.selectedIndex == 0) {
    valpais.innerText = "Debe seleccionar un Pais";
  }

  if (chkaceptar.checked == true) {
    valaceptar.innerText = "";
  } else {
    valaceptar.innerText = "Debe Aceptar los terminos y condiciones";
  }
}

btnEnviar.onclick = () => Validar();
