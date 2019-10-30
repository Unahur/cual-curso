var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", (req, res) => {
  models.materia
    .findAll({
      attributes: ["id", "nombre_materia"],
      include: [{
        as: 'materias_aprobadas',
        model: models.materia_aprobada
      }]
    })
    .then(materia => res.send(materia))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.materia
    .create({ nombre_materia: req.body.nombre_materia })
    .then(materia => res.status(201).send({ nombre_materia: materia.materia_aprobada }))
    .catch(() => res.sendStatus(500));
});


const findMateria = (id, { onSuccess, onNotFound, onError }) => {
  models.materia
    .findOne({
      attributes: ["id","nombre_materia"], // para poder buscar por id...!!!!!
      include: [{
        as: 'materias_aprobadas',
        model: models.materia_aprobada
      }],
      where: { id }
    })
    .then(materia => (materia ? onSuccess(materia) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findMateria(req.params.id, {
    onSuccess: materia => res.send(materia),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = materia =>
    materia
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
  const onSuccess = materia =>
    materia
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
