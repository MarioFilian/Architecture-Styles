const express = require('express');
const app = express();
app.get('/', (req, res) => res.json({ message: 'Hola Mundo REST' }));
app.listen(3000, () => console.log('REST server en :3000'));