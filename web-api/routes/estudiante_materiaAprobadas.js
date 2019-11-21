var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
  models.estudiante_materiaAprobada
    .findAll({
      attributes: ["id", "estudianteId", "materiaAprobadaId" ],
      include: [{
        as: 'materiaAprobada',
        model: models.materiaAprobada},
        {
        as: 'estudiante',
        model: models.estudiante,
          include: [{
            as: 'carrera',
            model: models.carrera
          }]
        }
      ]
    })
    .then(estudiante_materiaAprobada => res.send(estudiante_materiaAprobada))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.estudiante_materiaAprobada
    .create({ estudianteId: req.body.estudianteId, materiaAprobadaId: req.body.materiaAprobadaId })
    .then(estudiante_materiaAprobada => res.status(201).send({ estudianteId: estudiante_materiaAprobada.estudianteId, materiaAprobadaId: estudiante_materiaAprobada.materiaAprobadaId }))
    .catch(() => res.sendStatus(500));
});


const findEestudianteMateriaAprobada = (id, { onSuccess, onNotFound, onError }) => {
  models.estudiante_materiaAprobada
    .findOne({
      attributes: ["id","estudianteId", "materiaAprobadaId"], // para poder buscar por id...!!!!!
      include: [{
        as: 'materiaAprobada',
        model: models.materiaAprobada},
        {
        as: 'estudiante',
        model: models.estudiante,
          include: [{
            as: 'carrera',
            model: models.carrera
          }]
        }
      ],
      where: { id }
    })
    .then(estudiante_materiaAprobada => (estudiante_materiaAprobada ? onSuccess(estudiante_materiaAprobada) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findEestudianteMateriaAprobada(req.params.id, {
    onSuccess: estudiante_materiaAprobada => res.send(estudiante_materiaAprobada),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = estudiante_materiaAprobada =>
    estudiante_materiaAprobada
      .update({ estudianteId: req.body.estudianteId, materiaAprobadaId: req.body.materiaAprobadaId }, { fields: ["estudianteId","materiaAprobadaId" ] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findEestudianteMateriaAprobada(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = estudiante_materiaAprobada =>
    estudiante_materiaAprobada
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findEestudianteMateriaAprobada(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;
