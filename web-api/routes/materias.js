var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", (req, res) => {
  models.materias
    .findAll({
      attributes: ["id", "nombre_materia"],
    include: [{
        as: 'materias_aprobadas',
        model: models.materia_aprobada
      }]
    })
    .then(materias => res.send(materias))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.materias
    .create({ nombre_materia: req.body.nombre_materia })
    .then(materias => res.status(201).send({ nombre_materia: materias.materia_aprobada }))
    .catch(() => res.sendStatus(500));
});


const findMateria = (id, { onSuccess, onNotFound, onError }) => {
  models.materias
    .findOne({
      attributes: ["id","nombre_materia"], // para poder buscar por id...!!!!!
      include: [{
        as: 'materias_aprobadas',
        model: models.materia_aprobada
      }],
      where: { id }
    })
    .then(materias => (materias ? onSuccess(materias) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findMateria(req.params.id, {
    onSuccess: materias => res.send(materias),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = materias =>
    materias
      .update({ nombre_materia: req.body.nombre_materia }, { fields: ["nombre_materia"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findMateria(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = materias =>
    materias
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
