//Declarando variables
const monopolio = document.getElementById("monopolio");
const ajedrez = document.getElementById("ajedrez");
const lego = document.getElementById("lego");
const damas = document.getElementById("damas");
const laberinto = document.getElementById("monopolio");

const resultado = document.getElementById("resultado");

let precioMonopolio = 70.99;
let precioAjedrez = 78.99;
let precioLego = 100.99;
let precioDamas = 58.5;
let precioLaberinto = 35.0;
//total de juguetes comprados

const btnComprar = document.getElementById("btnComprar");

btnComprar.onclick = function () {
  let cantidadMonopolio = Number(monopolio.value);
  console.log(cantidadMonopolio);
  let cantidadAjedrez = Number(ajedrez.value);
  let cantidadLego = Number(lego.value);
  let cantidadDamas = Number(damas.value);
  let cantidadLaberinto = Number(laberinto.value);
  let totaljuguetes =
    cantidadAjedrez +
    cantidadMonopolio +
    cantidadLaberinto +
    cantidadLego +
    cantidadDamas;

  let costo =
    cantidadMonopolio * precioMonopolio +
    cantidadAjedrez * precioAjedrez +
    cantidadLego * precioLego +
    cantidadDamas * precioDamas +
    cantidadLaberinto * precioLaberinto;
    
  if (totaljuguetes < 10) {
    descuento = costo * 0.035;
    importe = costo - descuento;
    resultado.innerHTML = `El total a pagar es: ${importe.toFixed(2)}`;
  } else if (totaljuguetes >= 10 && totaljuguetes <= 20) {
    descuento = costo * 0.07;
    importe = costo - descuento;
    resultado.innerHTML = `El total a pagar es: ${importe.toFixed(2)}`;
  } else {
    descuento = costo * 0.095;
    importe = costo - descuento;
    resultado.innerHTML = `El total a pagar es: ${importe.toFixed(2)}`;
  }
};
