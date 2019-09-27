var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
    models.estudiante
        .findAll({
            attributes: ["dni", "nombre_apellido"]
        })
        .then(estudiante => res.send(estudiante))
        .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
    models.estudiante
        .create({ dni: req.body.dni, nombre_apellido: req.body.nombre_apellido, })
        .then(estudiante => res.status(201).send({ dni: estudiante.dni }))
        .catch(() => res.sendStatus(500));
});

const findestudiante = (dni, { onSuccess, onNotFound, onError }) => {
    models.estudiante
        .findOne({
            attributes: ["dni", "nombre_apellido"],
            where: { dni }
        })
        .then(estudiante => (estudiante ? onSuccess(estudiante) : onNotFound()))
        .catch(() => onError());
};

router.get("/:dni", (req, res) => {
    findestudiante(req.params.dni, {
        onSuccess: estudiante => res.send(estudiante),
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

router.put("/:dni", (req, res) => {
    const onSuccess = estudiante =>
        estudiante
        .update({ dni: req.body.dni })
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
    findestudiante(req.params.dni, {
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

router.delete("/:dni", (req, res) => {
    const onSuccess = estudiante =>
        estudiante
        .destroy()
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
    findestudiante(req.params.dni, {
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

module.exports = router;