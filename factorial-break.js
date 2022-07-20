let factBreak = 1;
let i = 1;
while (true) {
  if (i <= 10) {
    factBreak = factBreak * i;
    i++;
  } else {
    break;
  }
}
console.log(factBreak);
