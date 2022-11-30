const nombre = document.getElementById("nombre");
const numeroHoras = document.getElementById("numeroHoras");
const categoriaTrabajador = document.getElementById("categoriaTrabajador");
const numeroAnios = document.getElementById("numeroAnios");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
// Categorias
const a = 40;
const b = 35;
const c = 30;

// bonificaciones
const bonif1 = 0.15;
const bonif2 = 0.2;
const bonif3 = 0.3;
const bonif4 = 0.35;

function calcularSalario() {
  let sueldoBasico = 0;
  let bonificacion = 0;
  let sueldoNeto = 0;
  console.log(categoriaTrabajador.value);
  if (categoriaTrabajador.value == 1) {
    sueldoBasico = a * Number(numeroHoras.value);
  } else if (categoriaTrabajador.value == 2) {
    sueldoBasico = b * Number(numeroHoras.value);
  } else if (categoriaTrabajador.value == 3) {
    sueldoBasico = c * Number(numeroHoras.value);
  } else {
    resultado.innerHTML = `
      <section class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Error!</h4>
        <p>La categoria no es valida</p>
      </section>
    `;
    return;
  }

  if (parseInt(numeroAnios.value) >= 1 && parseInt(numeroAnios.value) <= 3) {
    bonificacion = bonif1 * sueldoBasico;
  } else if (
    parseInt(numeroAnios.value) >= 4 &&
    parseInt(numeroAnios.value) <= 7
  ) {
    bonificacion = bonif2 * sueldoBasico;
  } else if (
    parseInt(numeroAnios.value) >= 8 &&
    parseInt(numeroAnios.value) <= 12
  ) {
    bonificacion = bonif3 * sueldoBasico;
  } else if (parseInt(numeroAnios.value) >= 13) {
    bonificacion = bonif4 * sueldoBasico;
  } else {
    resultado.innerHTML = `
      <section class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Error!</h4>
        <p>El numero de años de servicio no es valido</p>
      </section>
    `;
    return;
  }

  sueldoNeto = sueldoBasico + bonificacion;
  // insertar en el html
  resultado.innerHTML = `
    <section class="alert alert-success" role="alert">
      <hr>
      <h4 class="alert-heading">Hola ${nombre.value}!</h4>
      <p>Sueldo basico: ${sueldoBasico}</p>
      <p>Bonificacion: ${bonificacion}</p>
      <p>Sueldo neto: ${sueldoNeto}</p>
      <hr>
    </section>
  `;
}

calcular.addEventListener("click", calcularSalario);
