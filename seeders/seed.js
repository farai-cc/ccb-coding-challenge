require("dotenv").config();
const db = require("../models");

const actorList = require("../data/actors.json");
const categoryList = require("../data/categories.json");
const filmList = require("../data/films.json");
const film_actorList = require("../data/film_actors.json");
const film_categoryList = require("../data/film_categories.json");
const languageList = require("../data/languages.json");


// Use the models to create the tables in the database and then populate the the database tables using the /data/.json files
db.sequelize.sync()
    .then(()=>db.actor.bulkCreate(actorList))
    .then(()=>db.category.bulkCreate(categoryList))
    .then(()=>db.film.bulkCreate(filmList))
    .then(()=>db.film_actor.bulkCreate(film_actorList))
    .then(()=>db.film_category.bulkCreate(film_categoryList))
    .then(()=>db.language.bulkCreate(languageList));