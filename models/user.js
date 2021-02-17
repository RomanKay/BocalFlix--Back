const mongoose = require("mongoose");

// Schéma //

const userSchema = new mongoose.Schema({
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
});

// Création du modèle //
const User = mongoose.model("Users", userSchema);

module.exports = User;
