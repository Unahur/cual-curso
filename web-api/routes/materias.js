var express = require("express");
var router = express.Router();
var models = require("../models");

const materiaControllers = require("../controllers/materias.controllers");

router.get("/", materiaControllers.getMaterias);

router.post("/", materiaControllers.postMateria);

router.get("/:id", materiaControllers.getMateria);

router.put("/:id", materiaControllers.updateMateria);

router.delete("/:id", materiaControllers.deleteMateria);

module.exports = router;
