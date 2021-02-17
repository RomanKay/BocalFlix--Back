// -------------- Création du Model -------------------- //

const mongoose = require("mongoose");

const movieShema = mongoose.Schema({
  title: String,

  description: String,

  link: String,

  image: String,

  category: {
    type: String,
    enum: ["Horreur", "Marvel", "Serie", "Action"],
  },
});

const movie = mongoose.model("movie", movieShema);
module.exports = movie;
