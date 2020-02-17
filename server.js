const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./controllers/routes.js')(app)

// Creates tables in the database from models using sequelize, and then starts servers
db.sequelize.sync().then(()=>{
    
    app.listen(PORT,()=>{

        console.log(`Localhost server is listening on port: ${PORT}`);
        
    })

})