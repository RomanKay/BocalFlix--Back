var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//Middleware//
var cors = require("./middleware/cors");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/bocalflix", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var logOutRouter = require("./routes/logOut");
var editProfilRouter = require("./routes/editProfil");
var moviesRouter = require("./routes/movies");
var favoriteRouter = require("./routes/favorite");
var loginRouter = require("./routes/login");
var subscribeRouter = require("./routes/subscribe");
var indexRouter = require("./routes/index");

var app = express();

app.use(cors.handle);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/logOut", logOutRouter);
app.use("/profile", editProfilRouter);
app.use("/movies", moviesRouter);
app.use("/favorite", favoriteRouter);
app.use("/login", loginRouter);
app.use("/subscribe", subscribeRouter);
app.use("/", indexRouter);

module.exports = app;
