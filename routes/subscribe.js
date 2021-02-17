var express = require("express");
var router = express.Router();
const subscribe = require("../controllers/subscribe");

router.post("/", subscribe.creatSubscribe);

module.exports = router;
