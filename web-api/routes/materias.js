var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", (req, res) => {
  models.estudiantes
    .findAll({
      attributes: ["id", "nombre_materia"]
    })
    .then(materias => res.send(materias))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.estudiantes
    .create({ nombre_materia: req.body.nombre_materia })
    .then(materias => res.status(201).send({ nombre_materia: materias.nombre_materia }))
    .catch(() => res.sendStatus(500));
});


const findEstudiantes = (id, { onSuccess, onNotFound, onError }) => {
  models.materia
    .findOne({
      attributes: ["id","nombre_materia"], // sacar el id ya que no lo quiero mostrar...!!!!!
      where: { id }
    })
    .then(materias => (materias? onSuccess(materias) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findEstudiantes(req.params.id, {
    onSuccess: materias => res.send(materias),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = materias =>
    materias
      .update({id: req.body.id, nombre_materia: req.body.nombre_materia }, { fields: ["id","nombre_materia"] })
      .update({nombre_materia: req.body.nombre_materia }, { fields: ["nombre_materia"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findEestudiantes(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = materia=>
    materia
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findEstudiantes(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),

    onError: () => res.sendStatus(500)
  });
});

module.exports = router;