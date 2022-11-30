// Ejercicio 1
const numHoras = document.getElementById("numHoras");
const numTarifa = document.getElementById("numTarifa");
const btnCalSalario = document.getElementById("btnCalSalario");
const pSalario = document.getElementById("pSalario");

btnCalSalario.onclick = function () {
  let horas = Number(numHoras.value);
  let tarifa = Number(numTarifa.value);
  if (horas > 40) {
    let salario = 40 * tarifa + (horas - 40) * tarifa * 1.5;
    pSalario.textContent = `El salario es: ${salario}`;
  } else {
    let salario = horas * tarifa;
    pSalario.textContent = `El salario es: ${salario}`;
  }
};

// Ejercicio 2
const numRadio = document.getElementById("numRadio");
const btnCalPerimetro = document.getElementById("btnCalPerimetro");
const pPerimetro = document.getElementById("pPerimetro");

btnCalPerimetro.onclick = function () {
  let radio = Number(numRadio.value);
  let perimetro = 2 * Math.PI * radio;
  let perimetro2 = 2 * Math.PI * (radio * 0.5);
  let perimetro3 = 2 * Math.PI * (radio * 0.25);
  pPerimetro.textContent = `El perimetro es: ${perimetro}, con radio al 50% es: ${perimetro2} y con radio al 25% es: ${perimetro3}`;
};

// Ejercicio 3
const numHoras2 = document.getElementById("numHoras2");
const numTarifa2 = document.getElementById("numTarifa2");
const btnCalSalario2 = document.getElementById("btnCalSalario2");
const pSalario2 = document.getElementById("pSalario2");

btnCalSalario2.onclick = function () {
  let horas = Number(numHoras2.value);
  let tarifa = Number(numTarifa2.value);
  let salario = horas * tarifa;
  let salario10 = salario * 0.1;
  let salario30 = salario * 0.3;
  let salario60 = salario * 0.6;
  let salario80 = salario * 0.8;
  pSalario2.textContent = `El salario es: ${salario}, el 10% es: ${salario10}, el 30% es: ${salario30}, el 60% es: ${salario60} y el 80% es: ${salario80}`;
};

// Ejercicio 4
const numParcial1 = document.getElementById("numParcial1");
const numParcial2 = document.getElementById("numParcial2");
const numParcial3 = document.getElementById("numParcial3");
const numFinal = document.getElementById("numFinal");
const numTrabajo = document.getElementById("numTrabajo");
const btnCalPromedio = document.getElementById("btnCalPromedio");
const pPromedio = document.getElementById("pPromedio");

btnCalPromedio.onclick = function () {
  let parcial1 = Number(numParcial1.value);
  let parcial2 = Number(numParcial2.value);
  let parcial3 = Number(numParcial3.value);
  let final = Number(numFinal.value);
  let trabajo = Number(numTrabajo.value);
  let promedio =
    ((parcial1 + parcial2 + parcial3) / 3) * 0.55 +
    final * 0.3 +
    trabajo * 0.15;
  pPromedio.textContent = `El promedio es: ${promedio}`;
};

// Ejercicio 5
const numPresupuesto = document.getElementById("numPresupuesto");
const btnCalPresupuesto = document.getElementById("btnCalPresupuesto");
const pPresupuesto = document.getElementById("pPresupuesto");

let ginecologiaPorcentaje = 0.4;
let traumatologiaPorcentaje = 0.3;
let pediatriaPorcentaje = 0.3;

btnCalPresupuesto.onclick = function () {
  let presupuesto = Number(numPresupuesto.value);
  let ginecologia = presupuesto * ginecologiaPorcentaje;
  let traumatologia = presupuesto * traumatologiaPorcentaje;
  let pediatria = presupuesto * pediatriaPorcentaje;
  pPresupuesto.textContent = `El presupuesto para ginecologia es: ${ginecologia}, para traumatologia es: ${traumatologia} y para pediatria es: ${pediatria}`;
};
