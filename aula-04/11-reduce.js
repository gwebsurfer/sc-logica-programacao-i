const alunos = [
  { nome: 'Ana', notas: [7, 8, 9] },
  { nome: 'Pedro', notas: [5, 6, 7] },
  { nome: 'Maria', notas: [9, 8, 10] },
  { nome: 'João', notas: [6, 7, 8] },
  { nome: 'Lucas', notas: [8, 9, 7] },
  { nome: 'Julia', notas: [10, 8, 9] },
];

alunos.map(({ nome, notas }) => {
  const media = notas.reduce((acc, cur) => {
    return (acc += cur);
  });

  const mediaFinal = (media / notas.length).toFixed(2);

  console.log(`Nome: ${nome} - Média: ${mediaFinal}`);
});
