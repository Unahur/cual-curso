var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
    models.estudiantes
        .findAll({
            attributes: ["id", "dni", "nombre_apellido"]
        })
        .then(estudiantes => res.send(estudiantes))
        .catch(() => res.sendStatus(500));
});

router.post("/", (req, res) => {
    models.estudiantes
        .create({ dni: req.body.dni, nombre_apellido: req.body.nombre_apellido, })
        .then(estudiantes => res.status(201).send({ dni: estudiantes.dni, nombre_apellido: estudiantes.nombre_apellido }))
        .catch(() => res.sendStatus(500));
});

const findestudiante = (id, { onSuccess, onNotFound, onError }) => {
    console.log("------------------mi id", id)
    models.estudiantes
        .findOne({
            attributes: ["id", "dni", "nombre_apellido"],
            where: { id }
        })
        .then(estudiantes => (estudiantes ? onSuccess(estudiantes) : onNotFound()))
        .catch(() => onError());
};

router.get("/:id", (req, res) => {
    findestudiante(req.params.id, {
        onSuccess: estudiantes => res.send(estudiantes),
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

router.put("/:id", (req, res) => {
    const onSuccess = estudiantes =>
        estudiantes
        .update({ dni: req.body.dni, nombre_apellido: req.body.nombre_apellido }, { fields: ["dni","nombre_apellido"] })
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
    findestudiante(req.params.id, {
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

router.delete("/:id", (req, res) => {
    const onSuccess = estudiantes => 
        estudiantes
        .destroy()
        .then(() => res.sendStatus(200))
        .catch(error => {
            console.log("-------------------error", error)
            res.sendStatus(500)});
    
    findestudiante(req.params.id, {
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(200)
    });
});

module.exports = router;

