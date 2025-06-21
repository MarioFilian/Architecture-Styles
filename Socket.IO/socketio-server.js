// socketio-server.js
const io = require('socket.io')(3000);
io.on('connection', (socket) => {
  socket.emit('message', 'Hola Mundo Socket.IO');
});