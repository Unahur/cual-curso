var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", (req, res) => {
  models.estudiantes
    .findAll({
      attributes: ["id", "dni", "nombre_apellido", "carrera"],
      include:[{
        as: 'materias_aprobadas',
        model: models.materia_aprobada
      }]
    })
    .then(estudiantes => res.send(estudiantes))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.estudiantes
    .create({ dni: req.body.dni, nombre_apellido: req.body.nombre_apellido, carrera: req.body.carrera  })
    .then(estudiantes => res.status(201).send({ dni: estudiantes.dni, nombre_apellido: estudiantes.nombre_apellido, carrera: estudiantes.carrera }))
    .catch(() => res.sendStatus(500));
});


const findEstudiantes = (id, { onSuccess, onNotFound, onError }) => {
  models.estudiantes
    .findOne({
      attributes: ["id","dni","nombre_apellido", "carrera"], // sacar el id ya que no lo quiero mostrar...!!!!!
      where: { id }
    })
    .then(estudiantes => (estudiantes ? onSuccess(estudiantes) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findEstudiantes(req.params.id, {
    onSuccess: estudiantes => res.send(estudiantes),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = estudiantes =>
    estudiantes
      .update({id: req.body.id, dni: req.body.dni, nombre_apellido: req.body.nombre_apellido , carrera: req.body.carrera}, { fields: ["id","dni","nombre_apellido", "carrera"] })
      .update({ dni: req.body.dni, nombre_apellido: req.body.nombre_apellido, carrera: req.body.carrera }, { fields: ["dni","nombre_apellido", "carrera"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findEstudiantes(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = estudiantes =>
    estudiantes
  
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

