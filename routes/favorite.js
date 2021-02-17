var express = require("express");
var router = express.Router();
const favorites = require("../controllers/favorite");

router.post("/", favorites.addFavorite);

router.get("/", favorites.getFavorite);

router.delete("/", favorites.supFavorite);

module.exports = router;
