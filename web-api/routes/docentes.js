var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
  models.docente
    .findAll({
      attributes: ["id", "nombre", "apellido", "dni", "sexo"]
    })
    .then(docentes => res.send(docentes))
    .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
  models.docente
    .create({ 
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      dni: req.body.dni,
      sexo: req.body.sexo
       })
    .then(Docente => res.status(201).send({ 
      id: Docente.id, 
      nombre: Docente.nombre,
      apellido: Docente.apellido, 
      dni: Docente.dni,
      sexo: Docente.sexo
       }))
    .catch(() => res.sendStatus(500));
});

const findDocente = (id, { onSuccess, onNotFound, onError }) => {
  models.Docente
    .findOne({
      attributes: ["id", "nombre", "apellido", "dni", "sexo"],
      where: { id }
    })
    .then(Docente => (Docente ? onSuccess(Docente) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findDocente(req.params.id, {
    onSuccess: Docente => res.send(Docente),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = Docente =>
    Docente
      .update({ 
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        sexo: req.body.sexo
        }, { fields: ["nombre", "apellido", "dni", "sexo"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findDocente(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = Docente =>
    Docente
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findDocente(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;