const trabajo = "otra cosa";
const objeto = {
  nombre: "nacho",
  edad: "37",
  trabajo,
  c1: "cosa 1",
  c2: "cosa 2",
  c3: "cosa 3",
  objAnidado: {
    nombreInt: "nacho interior",
    edadInt: "37 interior",
  },
};

// ...elResto
const {
  nombre,
  c1,
  c2,
  objAnidado:{nombreInt},
} = objeto;

const objFake = {
  //   nombre: "hola",
  //   edad: "38",
  //   c4: "c4",
};

const objectoFinal = { ...objeto, ...objFake };

// console.log({ objeto });
// console.log({ objectoFinal });
