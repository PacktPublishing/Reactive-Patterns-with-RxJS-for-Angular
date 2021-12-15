const fs = require('fs')
const jsonServer = require('json-server')
const server = jsonServer.create()
server.use(jsonServer.defaults());
const recipes = JSON.parse(fs.readFileSync('./db-json/recipes.json', 'UTF-8'));


server.get('/api/recipes', (req, res) => {
  res.status(200).json(recipes)
})

server.post('/api/recipes/save', (req, res) => {
  saveData(req.body)
  res.status(200).json(req.body)
})

async function saveData(data) {
  await fs.writeFile('./db-json/recipes1.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.log(err);
    } else {
      console.log("JSON data is saved.");
    }
  });
}

server.listen(3001, () => {
  console.log('Run Auth API Server')
})

