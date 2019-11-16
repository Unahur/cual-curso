var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", (req, res) => {
  models.carrera
    .findAll({
      attributes: ["id", "nombre_carrera"],
      include: [{
        as: 'estudiantes',
        model: models.estudiante
      }]
    })
    .then(carrera => res.send(carrera))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.carrera
    .create({ nombre_carrera: req.body.nombre_carrera })
    .then(carrera => res.status(201).send({ nombre_carrera: carrera.nombre_carrera }))
    .catch(() => res.sendStatus(500));
});


const findCarrera = (id, { onSuccess, onNotFound, onError }) => {
  models.carrera
    .findOne({
      attributes: ["id","nombre_carrera"], // para poder buscar por id...!!!!!
      include: [{
        as: 'estudiantes',
        model: models.estudiante
      }],
      where: { id }
    })
    .then(carrera => (carrera ? onSuccess(carrera) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findCarrera(req.params.id, {
    onSuccess: carrera => res.send(carrera),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = carrera =>
    carrera
      .update({ nombre_carrera: req.body.nombre_carrera }, { fields: ["nombre_carrera"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findCarrera(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = carrera =>
    carrera
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findCarrera(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;