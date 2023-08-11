const pizzas = [
  { sabor: 'Mussarela', valor: 20 },
  { sabor: 'Calabresa', valor: 25 },
  { sabor: 'Marguerita', valor: 28 },
  { sabor: 'Frango com Catupiry', valor: 32 },
  { sabor: 'Portuguesa', valor: 30 },
];

pizzas.forEach(({ sabor, valor }) => {
  console.log(sabor, valor);
});
