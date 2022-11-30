const monopolio = 70.99;
const ajedrez = 78.99;
const lego = 100.99;
const dama = 58.5;
const laberinto = 35.0;
let nm, na, nl, nd, nla, descuento;
const rtotal = document.getElementById("rtotal");
const rdescuento = document.getElementById("rdescuento");
const rtotalapagar = document.getElementById("rtotalapagar");
const btnCalcular = document.getElementById("btnCalcular");
// proudctos de html
const cAjedrez = document.getElementById("ajedrez");
const cMonopolio = document.getElementById("monopolio");
const cLego = document.getElementById("lego");
const cDama = document.getElementById("dama");
const cLaberinto = document.getElementById("laberinto");
const porcentajeDescuento = document.getElementById("porcentajeDescuento");

function calcularDescuento(cantidad) {
  if (cantidad < 10) {
    descuento = 3.5;
  } else if (cantidad >= 10 && cantidad <= 20) {
    descuento = 7;
  } else {
    descuento = 9.5;
  }
  return descuento;
}

btnCalcular.onclick = function () {
  nm = Number(cMonopolio.value);
  na = Number(cAjedrez.value);
  nl = Number(cLego.value);
  nd = Number(cDama.value);
  nla = Number(cLaberinto.value);
  let cantidad = nm + na + nl + nd + nla;
  let total =
    nm * monopolio + na * ajedrez + nl * lego + nd * dama + nla * laberinto;
  descuento = (total * calcularDescuento(cantidad)) / 100;
  let totalPagar = total - descuento;
  rtotal.innerHTML = `s/. ${total.toFixed(2)}`;
  rdescuento.innerHTML = `s/. ${descuento.toFixed(2)}`;
  rtotalapagar.innerHTML = `s/. ${totalPagar.toFixed(2)}`;
  porcentajeDescuento.innerHTML = `Descuento ${calcularDescuento(
    cantidad
  ).toFixed(2)}%`;
};
