const lugares = [
  { nome: 'Sala de Reuniões', capacidade: 8 },
  { nome: 'Auditório', capacidade: 50 },
  { nome: 'Sala de Treinamento', capacidade: 20 },
  { nome: 'Sala de Conferências', capacidade: 30 },
  { nome: 'Sala de Estudos', capacidade: 12 },
];

const capacidadeMax10 = lugares.find(({ capacidade }) => capacidade >= 10);
console.log('Capacidade máxima de pelo menos 10 pessoas:', capacidadeMax10);

const capacidadeMax25 = lugares.find(({ capacidade }) => capacidade >= 25);
console.log('Capacidade máxima de pelo menos 25 pessoas:', capacidadeMax25);

const capacidadeMax40 = lugares.find(({ capacidade }) => capacidade >= 40);
console.log('Capacidade máxima de pelo menos 25 pessoas:', capacidadeMax40);
