// webhook-api/client.js
const axios = require('axios');
axios.post('http://localhost:3002/webhook', { data: 'test' })
  .then(res => console.log('Respuesta Webhook:', res.data))
  .catch(console.error);

//esta es una prueba de webhook