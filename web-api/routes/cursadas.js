var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", (req, res) => {
  models.cursada
    .findAll({
      attributes: ["id", "dia_hora", "aulaId", "docenteId", "materiaId"]/*,
      include: [{
        as: 'carreras',
        model: models.carrera
      }]*/
    })
    .then(cursada => res.send(cursada))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.cursada
    .create({ dia_hora: req.body.dia_hora, aulaId: req.body.aulaId, docenteId: req.body.docenteId, materiaId: req.body.materiaId })
    .then(cursada => res.status(201).send({ dia_hora: cursada.dia_hora, aulaId: cursada.aulaId, docenteId: cursada.docenteId, materiaId: cursada.materiaId }))
    .catch(() => res.sendStatus(500));
});


const findCursada = (id, { onSuccess, onNotFound, onError }) => {
  models.cursada
    .findOne({
      attributes: ["id","dia_hora", "aulaId", "docenteId", "materiaId"],/* // para poder buscar por id...!!!!!
      include: [{
        as: 'carreras',
        model: models.carrera
      }],*/
      where: { id }
    })
    .then(cursada => (cursada ? onSuccess(cursada) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findCursada(req.params.id, {
    onSuccess: cursada => res.send(cursada),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = cursada =>
    cursada
      .update({ dia_hora: req.body.dia_hora, aulaId: req.body.aulaId, docenteId: req.body.docenteId, materiaId: req.body.materiaId }, { fields: ["dia_hora", "aulaId", "docenteId", "materiaId"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findCursada(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = cursada =>
    cursada
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findCursada(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;