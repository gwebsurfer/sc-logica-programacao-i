const pessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.8, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.9, peso: 100 },
];

const novaLista = pessoas.map(({ nome, peso, altura }) => {
  const IMC = (peso / (altura * altura)).toFixed(2);

  console.log(`Nome: ${nome} - IMC: ${IMC}`);
});
