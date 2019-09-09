var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
  models.aula
    .findAll({
      attributes: ["id", "edificio", "numero_aula"]
    })
    .then(aulas => res.send(aulas))
    .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
  models.aula
    .create({ edificio: req.body.edificio, numero_aula: req.body.numero_aula })
    .then(aula => res.status(201).send({ id: aula.id, edificio: aula.edificio, numero_aula: numero_aula }))
    .catch(() => res.sendStatus(500));
});


router.get("/:id", (req, res) => {
  findExample(req.params.id, {
    onSuccess: aula => res.send(aula),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});





module.exports = router;
