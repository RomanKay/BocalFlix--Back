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
    mail: { type: String, unique: true },
    pass: String,
    subscription: String,
    cardType: {
      type: String,
      enum: ["Visa", "Mastercard"],
    },
    cardNumber: String,
    cvv: Number,
    favorites: [favoriteShema],
  },
  { collection: "users" }
);

// Création du modèle //
const User = mongoose.model("Users", userSchema);

module.exports = User;
