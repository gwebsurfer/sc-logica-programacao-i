const atletas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.8, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.9, peso: 100 },
];

const pesoCrescente = [...atletas].sort((a, b) => a.peso - b.peso);
console.log(pesoCrescente);

const alturaDecrescente = [...atletas].sort((a, b) => b.altura - a.altura);
console.log(alturaDecrescente);

const ordemAlfabetica = [...atletas].sort((a, b) => (a.nome > b.nome ? 1 : -1));
console.log(ordemAlfabetica);
