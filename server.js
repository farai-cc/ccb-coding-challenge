const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import the routes into this server file
require('./controllers/routes.js')(app)

// Start server
app.listen(PORT,()=>{

    console.log(`Localhost server is listening on port: ${PORT}`);
        
})