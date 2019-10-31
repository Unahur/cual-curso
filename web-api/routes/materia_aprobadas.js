var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", (req, res) => {
  models.materia_aprobada
    .findAll({
      attributes: ["id", "id_estudiante", "id_materia"],
    include: [{
        as: 'estudiante',
        model: models.estudiante,
        as: 'materia',
        model: models.materias
      }]
    })
    .then(materia_aprobada => res.send(materia_aprobada))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.materia_aprobada
    .create({ id_estudiante: req.body.id_estudiante, id_materia: req.body.id_materia })
    .then(materia_aprobada => res.status(201).send({ id_estudiante: materia_aprobada.id_estudiante, id_materia:materia_aprobada.id_materia }))
    .catch(() => res.sendStatus(500));
});


const findMateria = (id, { onSuccess, onNotFound, onError }) => {
  models.materia_aprobada
    .findOne({
      attributes: ["id","id_materia","id_estudiante"], // para poder buscar por id...!!!!!
      include: [{
        as: 'estudiante',
        model: models.estudiante,
        as: 'materia',
        model: models.materias
      }],
      where: { id }
    })
    .then(materia_aprobada => (materia_aprobada ? onSuccess(materia_aprobada) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findMateria(req.params.id, {
    onSuccess: materia_aprobada => res.send(materia_aprobada),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = materia_aprobada =>
    materia_aprobada
      .update({ id_estudiante: req.body.id_estudiante, id_materia: req.body.id_materia }, { fields: ["id_estudiante", "id_materia"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findMateria(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});


router.delete("/:id", (req, res) => {
  const onSuccess = materia_aprobada =>
    materia_aprobada
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findMateria(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;
