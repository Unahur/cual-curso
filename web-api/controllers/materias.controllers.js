const models = require("../models");

const getMaterias = (req, res) => {
  models.materia
    .findAll({
      attributes: ["id", "nombre"],
      include: [{ as: 'cursadas', model: models.cursada }]
    })
    .then(materias => res.send(materias))
    .catch(() => res.sendStatus(500));
};
  
const postMateria = (req, res) => {
  models.materia
    .create({
      nombre: req.body.nombre
    })
    .then(materia => res.status(201).send({ id: materia.id }))
    .catch(() => res.sendStatus(500));
};
  
const findMateria = (id, { onSuccess, onNotFound, onError }) => {
  models.materia
    .findOne({
      include: [{ as: 'cursadas', model: models.cursada }],
      where: { id }
    })
    .then(materia => (materia ? onSuccess(materia) : onNotFound()))
    .catch(() => onError());
};

const getMateria = (req, res) => {
  findMateria(req.params.id, {
    onSuccess: materia => res.send(materia),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};

const updateMateria = (req, res) => {
  const onSuccess = materia =>
    materia
      .update({
        nombre: req.body.nombre,
      },
      { fields: ["nombre"] }
      )
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));

  findMateria(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};

const deleteMateria = (req, res) => {
  const onSuccess = materia =>
    materia
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findMateria(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};
  
module.exports = {getMaterias, postMateria, getMateria, updateMateria, deleteMateria};