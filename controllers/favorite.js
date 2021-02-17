//Import Model//
const movie = require("../models/movieCollection");
const User = require("../models/user");

const addFavorite = {
  createFavorite: async (req, res) => {
    /* Récupérer l'id */
    const { movieId, userId } = req.body;

    /******** Recherhce les infos du film *******/
    const infoMovie = await movie.findOne({ _id: movieId }).exec();
    console.log(infoMovie);
    // Movie -> Error
    if (infoMovie instanceof Error) {
      res.status(500).json({ message: "Error" });
      return;
    }
    // Movie -> object vide
    if (!infoMovie) {
      res.status(500).json({ message: "Error" });
      return;
    }

    /******* Recherche l'utilisateur *******/
    const infoUser = await User.findOne({ _id: userId }).exec();
    console.log(infoUser);

    // User -> Error
    if (infoUser instanceof Error) {
      res.status(500).json({ message: "Error" });
      return;
    }
    // User -> object vide
    if (!infoUser) {
      res.status(500).json({ message: "Error" });
      return;
    }

    /******** Ajout du favori *******/
    if (Array.isArray(infoUser.favorites)) {
      infoUser.favorites = [];
    }

    infoUser.favorites.push({
      title: infoMovie.title,
      link: infoMovie.link,
      image: infoMovie.image,
    });

    /* Engreistrement en BDD */
    const result = await infoUser.save();

    // result -> Error

    if (result instanceof Error) {
      res.status(500).json({ message: "Error" });
      return;
    }

    // Response success
    res.json({ succes: true });
  },
};

module.exports = addFavorite;
