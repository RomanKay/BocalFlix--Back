const User = require("../models/user");
const bcrypt = require("bcrypt");

const login = {
  toLogIn: async (req, res) => {
    console.log("Mail : " + req.body.mail);
    console.log("Mot de passe : " + req.body.pass);

    // Trouver l'utilisateur
    const user = await User.findOne({ mail: req.body.mail }).exec();
    console.log(user);
    if (user instanceof Error) {
      res.status(500).json({ message: "erreur " });
      return;
    }
    if (!user) {
      res.status(500).json({ message: "User inconnu" });
      return;
    }

    if (bcrypt.compareSync(req.body.pass, user.pass)) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  },
};

module.exports = login;
