var express = require("express");
var router = express.Router();
const editProfil = require("../controllers/editProfil");

router.put("/", editProfil.updateUserData);

module.exports = router;
