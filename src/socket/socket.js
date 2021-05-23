const WebSocket = require('ws');

let count = 0;
const wsserver = new WebSocket.Server({ port: 4001, host: 'localhost', path: '/wsserver' });

wsserver.on('connection', () => {
  count++;
  console.log('Count login' + count);
});
