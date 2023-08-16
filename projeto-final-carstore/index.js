const sendEmailsToCustomers = require('./modules/build-and-send-mails.js');
const customers = require('./data/customers.json');

sendEmailsToCustomers(customers);
