var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", (req, res) => {
  models.aula
    .findAll({
      attributes: ["id", "nombre_aula", "edificio"],/*,
      include: [{
        as: 'carreras',
        model: models.carrera
      }]*/
      where: { id }
    })
    .then(aula => res.send(aula))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.aula
    .create({ nombre_aula: req.body.nombre_aula, edificio: req.body.edificio })
    .then(aula => res.status(201).send({ nombre_aula: aula.nombre_aula, edificio: aula.edificio }))
    .catch(() => res.sendStatus(500));
});


const findAula = (id, { onSuccess, onNotFound, onError }) => {
  models.aula
    .findOne({
      attributes: ["id","nombre_aula", "edificio"],/* // para poder buscar por id...!!!!!
      include: [{
        as: 'carreras',
        model: models.carrera
      }],*/
      where: { id }
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

router.put("/:id", (req, res) => {
  const onSuccess = aula =>
    aula
      .update({ nombre_aula: req.body.nombre_aula, edificio: req.body.edificio }, { fields: ["nombre_aula", "edificio"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findAula(req.params.id, {
    onSuccess,
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

module.exports = router;