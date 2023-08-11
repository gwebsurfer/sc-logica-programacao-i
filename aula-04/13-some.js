const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 },
];

function verificarSalario1({ salario }) {
  return salario >= 1500;
}

function verificarSalario2({ salario }) {
  return salario <= 1000;
}

console.log(
  'Salário maior ou igual a R$ 1.500,00?',
  empregados.some(verificarSalario1)
);

console.log(
  'Salário menor ou igual a R$ 1.000,00?',
  empregados.some(verificarSalario2)
);
