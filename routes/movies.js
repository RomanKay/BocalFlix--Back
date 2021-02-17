var express = require("express");
var router = express.Router();
const movies = require("../controllers/movies");

router.get("/", movies.getMovie);

module.exports = router;
