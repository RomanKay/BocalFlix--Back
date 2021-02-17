var express = require("express");
var router = express.Router();
const addFavorite = require("../controllers/favorite");

router.post("/", addFavorite.createFavorite);

router.get("/", function (req, res, next) {
  res.send("Route à écrire");
});

router.delete("/", function (req, res, next) {
  res.send("Supprimer");
});

module.exports = router;
