const User = require("../models/user");

// ---------- find User----------------------- //
const editProfil = {
  getUserData: async (req, res) => {
    const userData = req.query.id;
    console.log(userData);
    const user = await User.findOne({ _id: userData }).exec();

    if (user instanceof Error) {
      res.status(500).json({ message: "ça fonctionne pas " });
      return;
    }

    res.json(user);
  },

  //-------- Save user data-------------------- //
  saveUserData: (req, res) => {
    console.log("Nom : " + req.body.lastName);
    console.log("Prénom : " + req.body.firstName);
    console.log("Mail : " + req.body.mail);
    console.log("Mot de passe : " + req.body.subscription);
    console.log("Numéro de carte : " + req.body.cardNumber);
    console.log("CVV : " + req.body.cvv);
  },

  // ------------ Edit user data -------------  //
  updateUserData: async (req, res) => {
    const user = await User.findOne({ _id: req.body.id }).exec();

    if (user instanceof Error) {
      res.status(500).json({ message: "erreur " });
      return;
    }
    if (!user) {
      res.status(500).json({ message: "Objet vide" });
    }

    user.lastName = req.body.lastName;
    user.firstName = req.body.firstName;
    user.mail = req.body.mail;
    user.subscription = req.body.subscription;
    user.cardNumber = req.body.cardNumber;
    user.cvv = req.body.cvv;

    // --------- Save new user data  ---------- //
    const result = await user.save();
    if (result instanceof Error) {
      res.status(500).json({ message: "Error" });
      return;
    }
    res.json({ success: true });
  },
};

module.exports = editProfil;
