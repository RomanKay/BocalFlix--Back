var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  res.send("Route à écrire");
});

router.get("/", function (req, res, next) {
  res.send("Route à écrire");
});

router.delete("/", function (req, res, next) {
  res.send("Route à écrire");
});

module.exports = router;
