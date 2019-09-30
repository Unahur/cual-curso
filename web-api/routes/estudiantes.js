var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
    models.estudiantes
        .findAll({
            attributes: ["dni", "nombre_apellido"]
        })
        .then(estudiantes => res.send(estudiantes))
        .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
    models.estudiantes
        .create({ dni: req.body.dni, nombre_apellido: req.body.nombre_apellido, })
        .then(estudiantes => res.status(201).send({ dni: estudiantes.dni }))
        .catch(() => res.sendStatus(500));
});

const findestudiante = (dni, { onSuccess, onNotFound, onError }) => {
    models.estudiantes
        .findOne({
            attributes: ["dni", "nombre_apellido"],
            where: { dni }
        })
        .then(estudiantes => (estudiantes ? onSuccess(estudiantes) : onNotFound()))
        .catch(() => onError());
};

router.get("/:dni", (req, res) => {
    findestudiante(req.params.dni, {
        onSuccess: estudiantes => res.send(estudiantes),
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

router.put("/:dni", (req, res) => {
    const onSuccess = estudiantes =>
        estudiantes
        .update({ dni: req.body.dni, nombre_apellido: req.body.nombre_apellido }, { fields: ["dni","nombre_apellido"] })
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
    findestudiante(req.params.dni, {
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

router.delete("/:dni", (req, res) => {
    const onSuccess = estudiantes =>
        estudiantes
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