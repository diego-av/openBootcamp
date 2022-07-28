const misDatos = {
  nombre: "Diego",
  apellido: "Vazquez",
  edad: 34,
  altura: 1.75,
  eresDesarrollador: "no",
};

const edadMisDatos = misDatos.edad;

let arrDatosPersonales = [
  misDatos,
  {
    nombre: "Carlos",
    apellido: "Gonzalez",
    edad: 35,
    altura: 1.8,
    eresDesarrollador: "no",
  },
  {
    nombre: "Juan",
    apellido: "Baez",
    edad: 32,
    altura: 1.66,
    eresDesarrollador: "no",
  },
];

let arrOrdenado = arrDatosPersonales.sort((a, b) => b.edad - a.edad);
console.log(arrOrdenado);
