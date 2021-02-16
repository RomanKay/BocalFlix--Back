var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  res.send("envoyer");
});

router.get("/", function (req, res, next) {
  res.send("Route à écrire");
});

router.delete("/", function (req, res, next) {
  res.send("Supprimer");
});

module.exports = router;
