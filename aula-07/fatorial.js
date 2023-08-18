/* 
    Faça uma rotina com e sem recursão em JavaScript para encontrar o fatorial de um número.
    n! = n.(n – 1).(n – 2).(n – 3)...2,1. 
*/

// RECURSIVIDADE

function calcularFatorial(num) {
  if (isNaN(num)) return 'Não existe fatorial de um texto';

  if (!Number.isInteger(num) || num < 0)
    return 'Não existe fatorial de um número não natural';

  if (num === 0 || num === 1) return 1;

  return num * calcularFatorial(num - 1);
}

console.log(calcularFatorial(7));

////

// LAÇO DE REPETIÇÃO

function calcularFatorial2(num) {
  if (isNaN(num)) return 'Não existe fatorial de um texto';

  if (!Number.isInteger(num) || num < 0)
    return 'Não existe fatorial de um número não natural';

  if (num === 0 || num === 1) return 1;

  let resultado = num;
  let primeiroMultiplicador = num - 1;

  for (let i = primeiroMultiplicador; i > 1; i--) {
    resultado *= i;
  }

  return resultado;
}

console.log(calcularFatorial2(7));
