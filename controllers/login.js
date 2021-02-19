const login = {
  toLogIn: async (res, req) => {
    console.log("Mail : " + req.body.mail);
    console.log("Mot de passe : " + req.body.pass);

    // Trouver l'utilisateur
    const user = await User.findOne({ _id: req.body.mail }).exec();

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
