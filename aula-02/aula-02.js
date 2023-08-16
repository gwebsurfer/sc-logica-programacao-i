const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getIncreasePercentage(salary) {
  if (salary <= 1500) return 20;
  if (salary <= 1700) return 15;
  if (salary <= 2000) return 10;
  return 5;
}

function calculateIncrease(salary) {
  const increasePercentage = getIncreasePercentage(salary);
  const increaseValue = (salary * increasePercentage) / 100;
  const newSalary = salary + increaseValue;

  return { increasePercentage, increaseValue, newSalary };
}

function formatCurrencyBRL(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function displayResults(
  salary,
  { increasePercentage, increaseValue, newSalary }
) {
  console.log(`Salário antes do reajuste: ${formatCurrencyBRL(salary)}`);
  console.log(`Percentual de aumento aplicado: ${increasePercentage}%`);
  console.log(`Valor do aumento: ${formatCurrencyBRL(increaseValue)}`);
  console.log(`Novo salário, após o aumento: ${formatCurrencyBRL(newSalary)}`);
}

function requestSalary() {
  rl.question(
    'Por favor, digite o salário do colaborador (em R$): ',
    (input) => {
      const salary = parseFloat(input);

      if (isNaN(salary) || salary < 0) {
        // Print error message in red using ANSI escape sequence
        console.log(
          '\x1b[31m%s\x1b[0m',
          'Atenção: Digite o valor do salário como um número positivo.'
        );
        requestSalary();
        return;
      }

      const result = calculateIncrease(salary);
      displayResults(salary, result);
      rl.close();
    }
  );
}

requestSalary();
