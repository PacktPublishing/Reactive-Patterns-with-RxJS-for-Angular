const fs = require('fs')
const jsonServer = require('json-server')
const server = jsonServer.create()
server.use(jsonServer.defaults());
const recipes = JSON.parse(fs.readFileSync('./db-json/recipes.json', 'UTF-8'));

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8081 });
let timerId = null;

server.get('/api/recipes', (req, res) => {
  res.status(200).json(recipes)
})

server.post('/api/recipes/save', (req, res) => {
  res.status(200).json(req.body)
})

server.listen(3001, () => {
  console.log('Run Auth API Server')
})

wss.on('connection', ws => {
  onConnection(ws);
  ws.on('message', message => {
    onMessage(message, ws);
  });
  ws.on('error', error => {
    OnError(error);
  });
  ws.on('close', ws => {
    onClose();
  })

});

function onConnection(ws) {
  console.log(`Connection Established. Listenning on ${wss.options.port}`);
  ws.send(JSON.stringify({ key: "key", message: "messageFromTheSocket" }));

  if (!timerId) {
    startTimer(ws);
  }
}

function onClose() {
  timerId = null;
  console.log('connection closed');
}

function OnError(error) {
  console.log(`Error => ${error[code]}`);
}

function onMessage(message, ws) {
  console.log(`Received message => ${message}`);
}

function startTimer(ws) {
  timerId = setInterval(() => {
    ws.send(JSON.stringify({ key: "key", message: "messageFromTheSocket" }));
  }, 1000);
}
