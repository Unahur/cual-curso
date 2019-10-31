var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
  models.estadio
    .findAll({
      attributes: ["id", "nombre"]
    })
    .then(estadios => res.send(estadios))
    .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
  models.estadio
    .create({ nombre: req.body.nombre })
    .then(estadio => res.status(201).send({ id: estadio.id }))
    .catch(error => {
      if (error == "SequelizeUniqueConstraintError: Validation error") {
        res.status(400).send('Bad request: existe otra estadio con el mismo nombre')
      }
      else {
        console.log(`Error al intentar insertar en la base de datos: ${error}`)
        res.sendStatus(500)
      }
    });
});

const findestadio = (id, { onSuccess, onNotFound, onError }) => {
  models.estadio
    .findOne({
      attributes: ["id", "nombre"],
      where: { id }
    })
    .then(estadio => (estadio ? onSuccess(estadio) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findestadio(req.params.id, {
    onSuccess: estadio => res.send(estadio),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = estadio =>
    estadio
      .update({ nombre: req.body.nombre }, { fields: ["nombre"] })
      .then(() => res.sendStatus(200))
      .catch(error => {
        if (error == "SequelizeUniqueConstraintError: Validation error") {
          res.status(400).send('Bad request: existe otro estadio con el mismo nombre')
        }
        else {
          console.log(`Error al intentar actualizar la base de datos: ${error}`)
          res.sendStatus(500)
        }
      });
    findestadio(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = estadio =>
    estadio
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findestadio(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;
