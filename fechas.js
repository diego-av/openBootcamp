/*


- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

const fecha = new Date();
console.log(fecha);

const fechaNacimiento = new Date(1987, 08, 28);
console.log(fechaNacimiento);

console.log(fecha > fechaNacimiento);

const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = fechaNacimiento.getMonth();
console.log(mesNacimiento);

const anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento);
