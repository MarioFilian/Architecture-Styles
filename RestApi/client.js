const axios = require('axios');
axios.get('http://localhost:3000')
  .then(res => console.log('Respuesta REST:', res.data))
  .catch(console.error);