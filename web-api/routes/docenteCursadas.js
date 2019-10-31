var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
  models.DocenteCursada
    .findAll({
      attributes: ["id", "docenteId", "cursadaId"]
    })
    .then(DocenteCursadas => res.send(DocenteCursadas))
    .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
  models.DocenteCursada
    .create({ 
      docenteId: req.body.docenteId,
      cursadaId: req.body.cursadaId
       })
    .then(DocenteCursada => res.status(201).send({ 
      id: DocenteCursada.id, 
      docenteId: DocenteCursada.docenteId,
      cursadaId: DocenteCursada.cursadaId
       }))
    .catch(() => res.sendStatus(500));
});

const findDocenteCursada = (id, { onSuccess, onNotFound, onError }) => {
  models.DocenteCursada
    .findOne({
      attributes: ["id", "docenteId", "cursadaID"],
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
        docenteId: req.body.docenteId,
        cursadaId: req.body.cursadaId
        }, { fields: ["docenteId", "cursadaId"] })
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