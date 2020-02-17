// Import models from the models folder to use when querying database using sequelize
const db = require("../models");

// Export routes below to server.js file
module.exports = function (app) {
    
    app.get('/api/movies',function(req,res){
        // Search for all films, then send the json data to client
        db.film.findAll().then(data => res.json(data));
    })
}