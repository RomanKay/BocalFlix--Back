// Faire une fonction pour recupérer un film //
const Movies = require("../models/movieCollection");

const movies = {
  getMovie: async (req, res) => {
    const movieId = req.query.id;
    console.log(movieId);
    const movie = await Movies.findOne({ _id: movieId }).exec();

    if (movie instanceof Error) {
      res.status(500).json({ message: "ça fonctionne pas " });
      return;
    }

    res.json(movie);
  },
};
module.exports = movies;
