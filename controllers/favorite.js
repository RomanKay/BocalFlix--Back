const addFavorite = {
  creatFavorite: (req, res) => {
    console.log("Titre : " + req.body.title);
    console.log("Link : " + req.body.link);
    console.log("Description : " + req.body.description);
    console.log("Image : " + req.body.image);

    const { title, link, description, image } = req.body;

    //Création du document à partir du modèle//

    const newFavorite = new User({
      title,
      link,
      description,
      image,
    });
    console.log(newUser);

    //Sauvegarde User//
    newFavorite.save((error) => {
      if (error) {
        res.status(500).json({ Message: "Une erreur s'est produite" });
      } else {
        res.status(200).json({ Message: "Votre film a été ajouté." });
      }
    });
  },
};

module.exports = addFavorite;
