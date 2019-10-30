var models = require("../models");

const getAulas = (req, res) => {
  models.aula
    .findAll({
      attributes: ["id", "edificio", "nro_aula"],
      include: [{ as: 'cursadas', model: models.cursada }]
    })
    .then(aulas => res.send(aulas))
    .catch(() => res.sendStatus(500));
};
  
const postAula = (req, res) => {
  models.aula
    .create({
      edificio: req.body.edificio, nro_aula: req.body.nro_aula
    })
    .then(aula => res.status(201).send({ id: aula.id }))
    .catch(() => res.sendStatus(500));
};
  
const findAula = (id, { onSuccess, onNotFound, onError }) => {
  models.aula
    .findOne({
      include: [{ as: 'cursadas', model: models.cursada }],
      where: { id }
    })
    .then(aula => (aula ? onSuccess(aula) : onNotFound()))
    .catch(() => onError());
};

const getAula = (req, res) => {
  findAula(req.params.id, {
    onSuccess: aula => res.send(aula),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};

const updateAula = (req, res) => {
  const onSuccess = aula =>
    aula
      .update({
        edificio: req.body.edificio,
        nro_aula: req.body.nro_aula
      },
      { fields: ["edificio", "nro_aula"] }
      )
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));

  findAula(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};

const deleteAula = (req, res) => {
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
};
  
module.exports = {getAulas, postAula, getAula, updateAula, deleteAula};
  