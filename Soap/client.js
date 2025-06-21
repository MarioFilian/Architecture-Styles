const soap = require('soap');
const url = 'http://localhost:3001/wsdl?wsdl';

soap.createClient(url, (err, client) => {
  if (err) return console.error(err);
  client.sayHello({ name: 'Mundo' }, (err, response) => {
    if (err) return console.error(err);
    console.log('Respuesta SOAP:', response.message);
  });
});