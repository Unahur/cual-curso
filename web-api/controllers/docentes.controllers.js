const models = require('../models');

const getDocentes = (req, res) => {
  models.docente
    .findAll({
      attributes: ["id", "nombre", "dni"],
      include: [{ as: 'cursadas', model: models.cursadadocente,
        include: [{ as: 'cursada', model: models.cursada }] }]
    })
    .then(docentes => res.send(docentes))
    .catch(() => res.sendStatus(500));
};
  
const postDocente = (req, res) => {
  models.docente
    .create({
      nombre: req.body.nombre, dni: req.body.dni
    })
    .then(docente => res.status(201).send({ id: docente.id }))
    .catch(() => res.sendStatus(500));
};
  
const findDocente = (id, { onSuccess, onNotFound, onError }) => {
  models.docente
    .findOne({
      attributes: ["id", "nombre", "dni"],
      include: [{ as: 'cursadas', model: models.cursadadocente,
        include: [{ as: 'cursada', model: models.cursada }] }],
      where: { id }
    })
    .then(docente => (docente ? onSuccess(docente) : onNotFound()))
    .catch(() => onError());
};

const getDocente = (req, res) => {
  findDocente(req.params.id, {
    onSuccess: docente => res.send(docente),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};

const updateDocente = (req, res) => {
  const onSuccess = docente =>
    docente
      .update({
        nombre: req.body.nombre,
        dni: req.body.dni
      },
      { fields: ["nombre", "dni"] }
      )
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));

  findDocente(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};

const deleteDocente = (req, res) => {
  const onSuccess = docente =>
    docente
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findDocente(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};
  
module.exports = {getDocentes, postDocente, getDocente, updateDocente, deleteDocente};
  