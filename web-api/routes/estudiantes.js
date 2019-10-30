var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", (req, res) => {
  models.estudiante
    .findAll({
      attributes: ["id", "dni", "nombre_apellido"],
      include: [{
        as: 'materias_aprobadas',
        model: models.materia_aprobada
      }]
    })
    .then(estudiante => res.send(estudiante))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.estudiante
    .create({ dni: req.body.dni, nombre_apellido: req.body.nombre_apellido })
    .then(estudiante => res.status(201).send({ dni: estudiante.dni, nombre_apellido: estudiante.nombre_apellido }))
    .catch(() => res.sendStatus(500));
});


const findEestudiante = (id, { onSuccess, onNotFound, onError }) => {
  models.estudiante
    .findOne({
      attributes: ["id","dni","nombre_apellido"], // para poder buscar por id...!!!!!
      where: { id }
    })
    .then(estudiante => (estudiante ? onSuccess(estudiante) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findEestudiante(req.params.id, {
    onSuccess: estudiante => res.send(estudiante),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = estudiante =>
    estudiante
      .update({ dni: req.body.dni, nombre_apellido: req.body.nombre_apellido }, { fields: ["dni","nombre_apellido"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findEestudiante(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = estudiante =>
    estudiante
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findEestudiante(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;
