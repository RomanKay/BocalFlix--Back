// Import//
const User = require("../models/user");
const bcrypt = require("bcrypt");

const subscribe = {
  creatSubscribe: (req, res) => {
    console.log("Nom : " + req.body.lastName);
    console.log("Prénom : " + req.body.firstName);
    console.log("Mail : " + req.body.mail);
    console.log("Mot de passe : " + req.body.pass);
    console.log("Forfait : " + req.body.subscription);
    console.log("Numéro de carte : " + req.body.cardNumber);
    console.log("CVV : " + req.body.cvv);

    //Encryptage du mot de passe//
    let encryptedPass = bcrypt.hashSync(req.body.pass, 10);

    const {
      lastName,
      firstName,
      mail,
      subscription,
      cardNumber,
      cvv,
      cardType,
    } = req.body;

    //Création du document à partir du modèle//

    const newUser = new User({
      lastName,
      firstName,
      mail,
      pass: encryptedPass,
      subscription,
      cardNumber,
      cvv,
      cardType,
    });
    console.log(newUser);

    //Sauvegarde User//
    newUser.save((error) => {
      if (error) {
        console.log(error);
        res.status(400).json({ Message: "Une erreur s'est produite" });
      } else {
        res
          .status(200)
          .json({ Message: "Votre inscription a été pris en compte." });
      }
    });
  },
};

module.exports = subscribe;
