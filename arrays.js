let lista = ["azucar", "huevos", "fideos", "jugo", "ravioles"];
lista.push("Aceite de Girasol");
lista.pop();

const peliculas = [
  { Titulo: "Resident Evil", Director: "Johannes Roberts", Anio: 2021 },
  { Titulo: "El señor de los anillos", Director: "Peter Jackson", Anio: 2003 },
  { Titulo: "Maxima velocidad", Director: "Jan de Bont", Anio: 1994 },
];
const mas2010 = peliculas.filter((el) => el.Anio > 2010);
const directoresPeliculas = peliculas.map((el) => el.Director);
const tituloPeliculas = peliculas.map((el) => el.Titulo);
const concatPeliculas = directoresPeliculas.concat(tituloPeliculas);
const propPeliculas = [...directoresPeliculas, ...tituloPeliculas];
