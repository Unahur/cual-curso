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
    .then(aula => res.status(201).send({ id: aula.id, edificio: aula.edificio, numero_aula: aula.numero_aula }))
    .catch(() => res.sendStatus(500));
});

const findAula= (id, { onSuccess, onNotFound, onError }) => {
  models.aula
    .findOne({
      attributes: ["id", "edificio"],
      where: { id}
    })
    .then(aula => (aula ? onSuccess(aula) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findAula(req.params.id, {
    onSuccess: aula => res.send(aula),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = aula =>
    aula
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findAula(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = aula =>
    aula
      .update({ edificio: req.body.edificio, numero_aula: req.body.numero_aula }, { fields: ["edificio","numero_aula"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findAula(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;
