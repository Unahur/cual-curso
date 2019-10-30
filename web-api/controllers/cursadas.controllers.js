var models = require("../models");

const getCursadas = (req, res) => {
  models.cursada
    .findAll({
      attributes: ["id_materia", "id_aula"],
      include: [ { as: 'materia', model: models.materia}, 
                 { as: 'aula', model: models.aula},
                 { as: 'cursadadocente', 
                   model: models.cursadadocente,
                   attributes: ["id_cursada", "id_docente"] }
      ]
    })
    .then(cursadas => res.send(cursadas))
    .catch(() => res.sendStatus(500));
};

const postCursada = (req, res) => {
  models.cursada
    .create({ nombre: req.body.nombre , descripcion: req.body.descripcion, 
              dia_hora: req.body.dia_hora, id_materia: req.body.id_materia,
              id_aula: req.body.id_aula })
    .then(cursada => res.status(201).send({ id: cursada.id }))
    .catch(() => res.sendStatus(500));
};

const findCursada = (id, { onSuccess, onNotFound, onError }) => {
  models.cursada
    .findOne({
      include: [ { as: 'materia', model: models.materia}, 
                 { as: 'aula', model: models.aula} ],
      where: { id }
    })
    .then(cursada => (cursada ? onSuccess(cursada) : onNotFound()))
    .catch(() => onError());
};

const getCursada = (req, res) => {
  findCursada(req.params.id, {
    onSuccess: cursada => res.send(cursada),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};

const updateCursada = (req, res) => {
  const onSuccess = cursada =>
    cursada
      .update({ nombre: req.body.nombre, 
                descripcion: req.body.descripcion, 
                dia_hora: req.body.dia_hora, 
                id_materia: req.body.id_materia,
                id_aula: req.body.id_aula },
         { fields: ["nombre", "descripcion", "dia_hora", "id_materia", "id_aula"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  
  findCursada(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};

const deleteCursada = (req, res) => {
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
};

module.exports = {getCursada, postCursada, getCursadas, updateCursada, deleteCursada};
