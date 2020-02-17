const db = require("../models");

module.exports = function (app) {
    
    app.get('/api/movies',function(req,res){
        db.film.findAll().then(data => res.json(data));
    })
}