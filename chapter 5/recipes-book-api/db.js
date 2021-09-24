const db  = require('./db.json');
const recipes = require('./db-json/recipes.json');


module.exports = {
    ...db,
    ...recipes
  
}
