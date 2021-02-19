//Import Model//
const movie = require("../models/movieCollection");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const favorites = {
  addFavorite: async (req, res) => {
    /* Récupérer le header */
    let header = req.get("Authorization");

    /* Récupérer le token */
    let token = header.split(" ")[1];

    let tokenData = jwt.decode(token, "test");
    console.log(tokenData);
    /* Récupérer l'id */
    const { movieId } = req.body;

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
    const infoUser = await User.findOne({ _id: tokenData.userId }).exec();
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

  supFavorite: async (req, res) => {
    /* Récupérer l'id */
    const { userId, favId } = req.body;

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

    /******* Recherche favori *******/
    const indexFav = infoUser.favorites.findIndex(
      (favorite) => String(favorite._id) === favId
    );

    console.log(indexFav);

    // Favori -> Error
    if (indexFav === -1) {
      res.status(500).json({ message: "Id Favori introuvable" });
      return;
    }

    infoUser.favorites.splice(indexFav, 1);

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
  getFavorite: async (req, res) => {
    /* Récupérer le header */
    let header = req.get("Authorization");

    /* Récupérer le token */
    let token = header.split(" ")[1];

    let tokenData = jwt.decode(token, "test");
    console.log(tokenData);
    /* Récupérer l'id */
    const { movieId } = req.body;

    const infoUser = await User.findOne({ _id: movieId }).exec();
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
    console.log(infoUser.favorites);

    res.json(infoUser.favorites);
  },
};

module.exports = favorites;
