const mongoose = require("mongoose");

// Schéma //

const favoriteShema = new mongoose.Schema({
  title: String,
  link: String,
  image: String,
});

const userSchema = new mongoose.Schema(
  {
    lastName: String,
    firstName: String,
    mail: String,
    pass: String,
    subscription: String,
    cardType: {
      type: String,
      enum: ["visa", "mastercard"],
    },
    cardNumber: Number,
    cvv: Number,
    favorites: [favoriteShema],
  },
  { collection: "users" }
);

// Création du modèle //
const User = mongoose.model("Users", userSchema);

module.exports = User;
