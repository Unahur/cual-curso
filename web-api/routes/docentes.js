var express = require("express");
var router = express.Router();

const docenteControllers = require('../controllers/docentes.controllers');

router.get("/", docenteControllers.getDocentes);

router.post("/", docenteControllers.postDocente);

router.get("/:id", docenteControllers.getDocente);

router.put("/:id", docenteControllers.updateDocente);

router.delete("/:id", docenteControllers.deleteDocente);

module.exports = router;