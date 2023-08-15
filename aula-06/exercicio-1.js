const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function recebeValores() {
  rl.question(
    'Por favor, digite o valor do produto (em R$): ',
    (inputCusto) => {
      const custo = parseFloat(inputCusto);

      if (isNaN(custo) || custo < 0) {
        console.log(
          '\x1b[31m%s\x1b[0m',
          'Atenção: Digite o valor do produto como um número positivo.'
        );
        recebeValores();
        return;
      }

      rl.question(
        'Digite a taxa de imposto (em porcentagem): ',
        (inputTaxa) => {
          const taxaImposto = parseFloat(inputTaxa);

          if (isNaN(taxaImposto) || taxaImposto < 0) {
            console.log(
              '\x1b[31m%s\x1b[0m',
              'Atenção: Digite a taxa de imposto como um número positivo.'
            );
            recebeValores();
            return;
          }

          const valorComImposto = somaImposto(custo, taxaImposto);
          mostrarResultado(custo, taxaImposto, valorComImposto);
          rl.close();
        }
      );
    }
  );
}

function mostrarResultado(custo, taxaImposto, valorComImposto) {
  const resultado = {
    custo: custo,
    taxaImposto: taxaImposto,
    valorComImposto: valorComImposto,
  };

  console.log(
    '\x1b[32m%s\x1b[0m',
    `Custo do produto: ${custo.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}`
  );

  console.log(`Imposto aplicado: ${taxaImposto}%`);

  console.log(
    '\x1b[32m%s\x1b[0m',
    `Valor final do produto: ${valorComImposto.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })}`
  );

  console.log(resultado);
}

function somaImposto(custo, taxaImposto) {
  const novoCusto = custo + custo * (taxaImposto / 100);
  return novoCusto;
}

recebeValores();
