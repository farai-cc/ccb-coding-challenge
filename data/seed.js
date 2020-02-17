require("dotenv").config();
const db = require("../models");

const actorList = require("./actors.json");
const categoryList = require("./categories.json");
const filmList = require("./films.json");
const film_actorList = require("./film_actors.json");
const film_categoryList = require("./film_categories.json");
const languageList = require("./languages.json");


// Use the actor.js model to populate the actors.json into the actors table in mysql database using sequelize
db.sequelize.sync()
    .then(()=>db.actor.bulkCreate(actorList))
    .then(()=>db.category.bulkCreate(categoryList))
    .then(()=>db.film.bulkCreate(filmList))
    .then(()=>db.film_actor.bulkCreate(film_actorList))
    .then(()=>db.film_category.bulkCreate(film_categoryList))
    .then(()=>db.language.bulkCreate(languageList));