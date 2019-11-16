var express = require("express");
var router = express.Router();
var models = require("../models");

// ver porque cambio tambien aca estudiante_cursadas?????
// modificado en la tabla manualmente

router.get("/", (req, res) => {
  models.estudiante_cursada
    .findAll({
      attributes: ["id", "estudianteId", "cursadaId", "nota"],/*
      include: [{
        as: 'carreras',
        model: models.carrera
      }]*/
    })
    .then(estudiante_cuarsada => res.send(estudiante_cuarsada))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.estudiante_cuarsada
    .create({ estudianteId: req.body.estudianteId, cursadaId: req.body.cursadaId })
    .then(estudiante_cuarsada => res.status(201).send({ estudianteId: estudiante_cuarsada.estudianteId, cursadaId: estudiante_cuarsada.cursadaId }))
    .catch(() => res.sendStatus(500));
});


const findEstudianteCursada = (id, { onSuccess, onNotFound, onError }) => {
  models.estudiante_cuarsada
    .findOne({
      attributes: ["id","estudianteId", "cursadaId"],/* // para poder buscar por id...!!!!!
      include: [{
        as: 'carreras',
        model: models.carrera
      }],*/
      where: { id }
    })
    .then(estudiante_cuarsada => (estudiante_cuarsada ? onSuccess(estudiante_cuarsada) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findEstudianteCursada(req.params.id, {
    onSuccess: estudiante_cuarsada => res.send(estudiante_cuarsada),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = estudiante_cuarsada =>
    estudiante_cuarsada
      .update({ estudianteId: req.body.estudianteId, cursadaId: req.body.cursadaId }, { fields: ["estudianteId", "cursadaId"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findEstudianteCursada(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = estudiante_cuarsada =>
    estudiante_cuarsada
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findEstudianteCursada(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;