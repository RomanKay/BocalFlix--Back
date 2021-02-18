const User = require("../models/user");

const login = {
  toLogIn: async (res, req) => {
    const { userId } = req.body;

    /******* Recherche l'utilisateur *******/
    const infoUser = await User.findOne({ _id: userId }).exec();
    console.log(infoUser);

    // User -> Error
    if (infoUser instanceof Error) {
      res.status(500).json({ message: "Error" });
      return;
    }
    // User -> object vide
    if (!infoUser) {
      res.status(500).json({ message: "Error" });
      return;
    }
  },
};

module.exports = login;
