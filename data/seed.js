require("dotenv").config();
const db = require("../models");

const actorList = require("./actors.json");
const categoryList = require("./categories.json");
const filmList = require("./films.json");

// Use the actor.js model to populate the actors.json into the actors table in mysql database using sequelize
db.sequelize.sync()
    .then(()=>db.actor.bulkCreate(actorList))
    .then(()=>db.category.bulkCreate(categoryList))
    .then(()=>db.film.bulkCreate(filmList));