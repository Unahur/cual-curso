var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
  models.materiaAprobada
    .findAll({
      attributes: ["id", "nombre_materia", "nota_materia"],
      include: [{
        as: 'estudiante_materiaAprobadas',
        model: models.estudiante_materiaAprobada,
        include: [{
          as: 'estudiante',
          model: models.estudiante,
          // para poder ver a la carrera que pertenece el alumno
          include: [{
            as: 'carrera',
            model: models.carrera
          }] 
        }]
      }]
    })
    .then(materiaAprobada => res.send(materiaAprobada))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.materiaAprobada
    .create({ nombre_materia: req.body.nombre_materia, nota_materia: req.body.nota_materia })
    .then(materiaAprobada => res.status(201).send({ nombre_materia: materiaAprobada.nombre_materia, nota_materia: materiaAprobada.nota_materia }))
    .catch(() => res.sendStatus(500));
});


const findMateriaAprobada = (id, { onSuccess, onNotFound, onError }) => {
  models.materiaAprobada
    .findOne({
      attributes: ["id","nombre_materia", "nota_materia"], // para poder buscar por id...!!!!!
      include: [{
        as: 'estudiante_materiaAprobadas',
        model: models.estudiante_materiaAprobada,
        include: [{
          as: 'estudiante',
          model: models.estudiante,
          // para poder ver a la carrera que pertenece el alumno
          include: [{
            as: 'carrera',
            model: models.carrera
          }] 
        }]
      }],
      where: { id }
    })
    .then(materiaAprobada => (materiaAprobada ? onSuccess(materiaAprobada) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findMateriaAprobada(req.params.id, {
    onSuccess: materiaAprobada => res.send(materiaAprobada),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = materiaAprobada =>
    materiaAprobada
      .update({ nombre_materia: req.body.nombre_materia, nota_materia: req.body.nota_materia }, { fields: ["nombre_materia", "nota_materia"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findMateriaAprobada(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = materiaAprobada =>
    materiaAprobada
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findMateriaAprobada(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;
