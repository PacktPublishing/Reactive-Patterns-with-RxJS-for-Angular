const fs = require('fs')
const jsonServer = require('json-server')
const server = jsonServer.create()
server.use(jsonServer.defaults());
const recipes = JSON.parse(fs.readFileSync('./db-json/recipes.json', 'UTF-8'));


server.get('/api/recipes', (req, res) => {
  res.status(200).json(recipes)
})

server.post('/api/recipes/save', (req, res) => {
  res.status(200).json(req.body)
})

server.listen(3001, () => {
  console.log('Run Auth API Server')
})

