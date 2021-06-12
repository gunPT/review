const dbConfig = require("../config/db.config.js.js.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.reviews = require("./reviews.model.js.js.js")(mongoose);

module.exports = db;