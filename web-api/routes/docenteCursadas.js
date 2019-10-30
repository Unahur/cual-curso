var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
  models.DocenteCursada
    .findAll({
      attributes: ["docenteid", "cursadaid"]
    })
    .then(DocenteCursadas => res.send(DocenteCursadas))
    .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
  models.DocenteCursada
    .create({ 
      nombre: req.body.nombre
       })
    .then(DocenteCursada => res.status(201).send({ 
      id: DocenteCursada.id, 
      docenteid: DocenteCursada.docenteid,
      cursadaid: DocenteCursada.cursadaid
       }))
    .catch(() => res.sendStatus(500));
});

const findDocenteCursada = (id, { onSuccess, onNotFound, onError }) => {
  models.DocenteCursada
    .findOne({
      attributes: ["docenteid", "cursadaid"],
      where: { id }
    })
    .then(DocenteCursada => (DocenteCursada ? onSuccess(DocenteCursada) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findDocenteCursada(req.params.id, {
    onSuccess: DocenteCursada => res.send(DocenteCursada),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = DocenteCursada =>
    DocenteCursada
      .update({ 
        docenteid: req.body.docenteid,
        cursadaid: req.body.cursadaid
        }, { fields: ["docenteid", "cursadaid"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findDocenteCursada(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = DocenteCursada =>
    DocenteCursada
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findDocenteCursada(req.params.id, {
    onSuccess,  
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;