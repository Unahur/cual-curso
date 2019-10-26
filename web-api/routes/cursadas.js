var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
  models.Cursada
    .findAll({
      attributes: ["id", "nombre"]
    })
    .then(cursadas => res.send(cursadas))
    .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
  models.Cursada
    .create({ 
      nombre: req.body.nombre
       })
    .then(Cursada => res.status(201).send({ 
      id: Cursada.id, 
      nombre: Cursada.nombre
       }))
    .catch(() => res.sendStatus(500));
});

const findCursada = (id, { onSuccess, onNotFound, onError }) => {
  models.Cursada
    .findOne({
      attributes: ["id", "nombre"],
      where: { id }
    })
    .then(Cursada => (Cursada ? onSuccess(Cursada) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findCursada(req.params.id, {
    onSuccess: Cursada => res.send(Cursada),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = Cursada =>
    Cursada
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
  const onSuccess = Cursada =>
    Cursada
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