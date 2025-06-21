// websocket-api/server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3003 });
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('Servidor recibió:', message.toString());
    ws.send('Hola Mundo WebSocket');
  });
});