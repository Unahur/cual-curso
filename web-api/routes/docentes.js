var express = require("express");
var router = express.Router();
var models = require("../models");


router.get("/", (req, res) => {
  models.docente
    .findAll({
      attributes: ["id", "nombre_apellido_docente"]/*,
      include: [{
        as: 'carreras',
        model: models.carrera
      }]*/
    })
    .then(docente => res.send(docente))
    .catch(() => res.sendStatus(500));
});


router.post("/", (req, res) => {
  models.docente
    .create({ nombre_apellido_docente: req.body.nombre_apellido_docente })
    .then(docente => res.status(201).send({ nombre_apellido_docente: docente.nombre_apellido_docente }))
    .catch(() => res.sendStatus(500));
});


const findDocente = (id, { onSuccess, onNotFound, onError }) => {
  models.docente
    .findOne({
      attributes: ["id","nombre_apellido_docente"],/* // para poder buscar por id...!!!!!
      include: [{
        as: 'carreras',
        model: models.carrera
      }],*/
      where: { id }
    })
    .then(docente => (docente ? onSuccess(docente) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findDocente(req.params.id, {
    onSuccess: docente => res.send(docente),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = docente =>
    docente
      .update({ nombre_apellido_docente: req.body.nombre_apellido_docente }, { fields: ["nombre_apellido_docente"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findDocente(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = docente =>
    docente
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