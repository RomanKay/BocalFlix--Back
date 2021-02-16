var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Route à écrire");
});

module.exports = router;
