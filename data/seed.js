require("dotenv").config();
const db = require("../models");

const actorList = require("./actors.json");

// Use the actor.js model to populate the actors.json into the actors table in mysql database using sequelize
db.sequelize.sync()
    .then(()=>db.actor.bulkCreate(actorList))