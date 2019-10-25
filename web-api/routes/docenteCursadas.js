var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
  models.cursada
    .findAll({
      attributes: ["id", "nombre"]
    })
    .then(cursadas => res.send(cursadas))
    .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
  models.cursada
    .create({ 
      nombre: req.body.nombre
       })
    .then(cursada => res.status(201).send({ 
      id: cursada.id, 
      nombre: cursada.nombre
       }))
    .catch(() => res.sendStatus(500));
});

const findCursada = (id, { onSuccess, onNotFound, onError }) => {
  models.cursada
    .findOne({
      attributes: ["id", "nombre"],
      where: { id }
    })
    .then(cursada => (cursada ? onSuccess(cursada) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findCursada(req.params.id, {
    onSuccess: cursada => res.send(cursada),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = cursada =>
    cursada
      .update({ 
        nombre: req.body.nombre
        }, { fields: ["nombre"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findCursada(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = cursada =>
    cursada
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findCursada(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;