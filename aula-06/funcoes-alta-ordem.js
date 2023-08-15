/* const somaImposto = (taxaImposto) => (custo) => custo / (1 - taxaImposto);
console.log(somaImposto(0.05)(5));

function somaImpostoT(taxaImposto) {
  return function (custo) {
    return custo / (1 - taxaImposto);
  };
}

console.log(somaImposto(0.05)(5));
 */

function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }
}

function greet() {
  console.log('Hello!');
}

repeat(greet, 10);
