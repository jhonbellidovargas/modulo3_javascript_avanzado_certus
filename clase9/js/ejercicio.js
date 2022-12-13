// Crear un objeto Pokemon con los atributos: nombre, nivel, tipo (gras, fuego, agua, normal, etc.), hablar ->
//Mi nombre es <nombre del pokemon> y soy de nivel <nivel del pokemon>

let pokemon = {
  nombre: "Pikachu",
  nivel: 100,
  tipo: "Electrico",
  hablar: function () {
    alert(`Mi nombre es ${this.nombre} y soy de nivel ${this.nivel}`);
  },
};

let pokemons = [
  {
    nombre: "Pikachu",
    nivel: 100,
    tipo: "Electrico",
    hablar: function () {
      alert(`Mi nombre es ${this.nombre} y soy de nivel ${this.nivel}`);
    },
  },
  {
    nombre: "Charmander",
    nivel: 100,
    tipo: "Fuego",
    hablar: function () {
      alert(`Mi nombre es ${this.nombre} y soy de nivel ${this.nivel}`);
    },
  },
  {
    nombre: "Bulbasaur",
    nivel: 100,
    tipo: "Planta",
    hablar: function () {
      alert(`Mi nombre es ${this.nombre} y soy de nivel ${this.nivel}`);
    },
  },
];

// jquery referencia a #root
$("#root").html(
  pokemons.map((pokemon) => {
    return `<section class="card m-2" style="width: 18rem;">
    <section class="card-body">
      <h5 class="card-title">${pokemon.nombre}</h5>
      <p class="card-text">Nivel: ${pokemon.nivel}</p>
      <p class="card-text">Tipo: ${pokemon.tipo}</p>
      <button class="btn btn-primary" onclick="pokemon.hablar()">Hablar</button>
    </section>
  </section>`;
  })
);
