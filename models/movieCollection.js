// -------------- Création du Model -------------------- //

const mongoose = require("mongoose");

const movieShema = mongoose.Schema(
  {
    title: String,

    description: String,

    link: String,

    image: String,

    category: {
      type: Array,
    },
  },
  {
    collection: "movies",
  }
);

const movie = mongoose.model("movie", movieShema);
module.exports = movie;
