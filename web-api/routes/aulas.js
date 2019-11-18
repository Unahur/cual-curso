var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/pagina/:pagina", (req, res) => {
  const pagina = req.params.pagina;
  const limite = 5;
  const pasarPagina = pagina * limite;

  models.aula
    .count()
    .then(aula => {
      return aula;
    })
    .then(function(totalRegistros) {
      models.aula
        .findAll({
          attributes: ["id", "edificio", "numero_aula", "cursada_id"],
          offset: pasarPagina,
          limit: limite
        })
        .then(aulas => res.send([aulas, { paginas: totalRegistros / limite }]))
        .catch(() => res.sendStatus(500));
    });
});

router.get("/", (req, res) => {
  const pagina = 0;
  const limite = 5;
  const pasarPagina = pagina * limite;

  models.aula
    .count()
    .then(aula => {
      return aula;
    })
    .then(function(totalRegistros) {
      models.aula
        .findAll({
          attributes: ["id", "edificio", "numero_aula", "cursada_id"],
          offset: pasarPagina,
          limit: limite
        })
        .then(aulas => res.send([aulas, { paginas: totalRegistros / limite }]))
        .catch(() => res.sendStatus(500));
    });
});

router.get("/todasLasAulas/", (req, res) => {
  models.aula
    .findAll({
      attributes: ["id", "edificio", "numero_aula", "cursada_id"]
    })
    .then(aulas => res.send(aulas))
    .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
  models.aula
    // .create({ edificio: req.body.edificio, numero_aula: req.body.numero_aula })
    .findOrCreate({
      where: {
        edificio: req.body.edificio,
        numero_aula: req.body.numero_aula
      },
      defaults: {
        cursada_id: req.body.cursada_id
      }
    })
    .then(aula =>
      res.status(201).send({
        id: aula.id,
        edificio: aula.edificio,
        numero_aula: aula.numero_aula
      })
    )
    .catch(() => res.sendStatus(500));
});

const findAula = (id, { onSuccess, onNotFound, onError }) => {
  models.aula
    .findOne({
      attributes: ["id", "edificio", "numero_aula"],
      where: {
        id
      }
    })
    .then(aula => (aula ? onSuccess(aula) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
  console.log(req.params.id)
  findAula(req.params.id, {
    onSuccess: aula => res.send(aula),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.delete("/:id", (req, res) => {
  const onSuccess = aula =>
    aula
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findAula(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

router.put("/:id", (req, res) => {
  const onSuccess = aula =>
    aula
      .update(
        {
          edificio: req.body.edificio,
          numero_aula: req.body.numero_aula,
          cursada_id: req.body.cursada_id
        },
        {
          fields: ["edificio", "numero_aula", "cursada_id"]
        }
      )
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findAula(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;
