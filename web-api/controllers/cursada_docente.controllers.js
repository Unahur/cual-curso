var models = require("../models");

const getCursadasDocentes = (req, res) => {
  models.cursadadocente
    .findAll({
      attributes: ["id", "id_cursada", "id_docente"],
      include: [{ as: 'cursada', model: models.cursada },
                { as: 'docente', model: models.docente }
      ]
    })
    .then(cursada_docente => res.send(cursada_docente))
    .catch(() => res.sendStatus(500));
};
  
const postCursadaDocente = (req, res) => {
  models.cursadadocente
    .create({
      attributes: ["id", "id_cursada", "id_docente"],
      id_cursada: req.body.id_cursada, id_docente: req.body.id_docente
    })
    .then(cursada_docente => res.status(201).send({ id: cursada_docente.id }))
    .catch(() => res.sendStatus(500));
};
  
const findCursadaDocente = (id, { onSuccess, onNotFound, onError }) => {
  models.cursadadocente
    .findOne({
      attributes: ["id", "id_cursada", "id_docente"],
      include: [{ as: 'cursada', model: models.cursada },
                { as: 'docente', model: models.docente }
      ],
      where: { id }
    })
    .then(cursada_docente => (cursada_docente ? onSuccess(cursada_docente) : onNotFound()))
    .catch(() => onError());
};

const getCursadaDocente = (req, res) => {
  findCursadaDocente(req.params.id, {
    onSuccess: cursada_docente => res.send(cursada_docente),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};

const updateCursadaDocente = (req, res) => {
  const onSuccess = cursada_docente =>
    cursada_docente
      .update({
        id_cursada: req.body.id_cursada,
        id_docente: req.body.id_docente
      },
      { fields: ["id_cursada", "id_docente"] }
      )
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));

  findCursadaDocente(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};

const deleteCursadaDocente = (req, res) => {
  const onSuccess = cursada_docente =>
    cursada_docente
      .destroy()
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findCursadaDocente(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
};
  
module.exports = { getCursadasDocentes, postCursadaDocente, getCursadaDocente, 
                  updateCursadaDocente, deleteCursadaDocente };                       