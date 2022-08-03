const devuelveTrue = () => true;
console.log(devuelveTrue());

let holaPromesa = setTimeout(() => {
  console.log("Hola soy una promesa");
}, 5000);
