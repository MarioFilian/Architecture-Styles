const express = require('express');
const app = express();
app.use(express.json());
app.post('/webhook', (req, res) => {
  console.log('Webhook recibido:', req.body);
  res.json({ message: 'Hola Mundo Webhook' });
});
app.listen(3002, () => console.log('Webhook escuchando en :3002'));