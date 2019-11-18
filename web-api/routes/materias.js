var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
  models.materia
    .findAll({
      attributes: ["id", "nombre", "profesor", "dia", "horario", "correlativa"]
    })
    .then(materias => res.send(materias))
    .catch(() => res.sendStatus(500));
});

const findMateria = (id, { onSuccess, onNotFound, onError }) => {
  models.materia
    .findOne({
      attributes: ["id", "nombre", "profesor", "dia", "horario", "correlativa"],
      where: { id }
    })
    .then(materia => (materia ? onSuccess(materia) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  findMateria(req.params.id, {
    onSuccess: materia => res.send(materia),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;
