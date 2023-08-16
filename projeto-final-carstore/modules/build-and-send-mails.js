const enviarEmail = require('./envia-email.js');
const carData = require('../data/car-data.json');

function getDayOfWeek() {
  const daysOfWeek = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
  ];
  const today = new Date();
  const dayIndex = today.getDay();
  return daysOfWeek[dayIndex];
}

function buildEmailBody(customer) {
  const newVehiclesList = carData.newVehicles
    .map((car) => `- ${car}`)
    .join('\n');

  const topSellingCarsList = carData.topSellingCars
    .map((car, index) => `${index + 1}. ${car}`)
    .join('\n');

  return `
    Olá, ${customer.firstName}!

    Estas são as novidades da semana na CarStore:

    Novos Veículos:
    ${newVehiclesList}

    Top 10 Mais Vendidos:
    ${topSellingCarsList}

    Condições Especiais de Aquisição:
    ${customer.acquisitionConditions}

    Visite uma de nossas lojas para mais informações!

    Atenciosamente,
    Equipe CarStore
  `;
}

const sendEmailsToCustomers = (customers) => {
  const dayOfWeek = getDayOfWeek();

  if (dayOfWeek !== 'Segunda-feira') {
    console.log(
      `\x1b[31mAtenção:\x1b[0m Hoje é ${dayOfWeek}! Este e-mail será enviado apenas as segundas-feiras.`
    );
    return;
  }

  customers.forEach((customer) => {
    if (customer.receiveMarketingEmails) {
      const emailBody = buildEmailBody(customer);
      enviarEmail(customer.email, 'Novidades CarStore', emailBody);
    }
  });
};

module.exports = sendEmailsToCustomers;
