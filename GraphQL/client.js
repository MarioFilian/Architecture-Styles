// graphql-api/client.js
const { request } = require('graphql-request');
const query = `query { hello(name: "Mundo") }`;
request('http://localhost:3006', query)
  .then(data => console.log('Respuesta GraphQL:', data))
  .catch(console.error);