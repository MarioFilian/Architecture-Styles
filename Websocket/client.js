// websocket-api/client.js
const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:3003');
ws.on('open', () => ws.send('Cliente conectado'));
ws.on('message', (data) => console.log('Cliente recibió:', data.toString()));