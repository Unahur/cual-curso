var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", (req, res) => {
  models.estudiante
    .findAll({
      attributes: ["id", "dni", "nombre_apellido", "carreraId"],
      include: [{
        as: 'carreras',
        model: models.carrera
      }],
      where: { id }
    })
    .then(estudiante => res.send(estudiante))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.estudiante
    .create({ dni: req.body.dni, nombre_apellido: req.body.nombre_apellido, carreraId: req.body.carreraId })
    .then(estudiante => res.status(201).send({ dni: estudiante.dni, nombre_apellido: estudiante.nombre_apellido, carreraId: estudiante.carreraId }))
    .catch(() => res.sendStatus(500));
});


const findEestudiante = (id, { onSuccess, onNotFound, onError }) => {
  models.estudiante
    .findOne({
      attributes: ["id","dni","nombre_apellido", "carreraId"], // para poder buscar por id...!!!!!
      include: [{
        as: 'carreras',
        model: models.carrera
      }],
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
      .update({ dni: req.body.dni, nombre_apellido: req.body.nombre_apellido, carreraId: req.body.carreraId }, { fields: ["dni","nombre_apellido","carreraId"] })
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