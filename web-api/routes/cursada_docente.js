var express = require("express");
var router = express.Router();

const cursada_docenteControllers = require("../controllers/cursada_docente.controllers");

router.get("/", cursada_docenteControllers.getCursadasDocentes);

router.post("/", cursada_docenteControllers.postCursadaDocente);

router.get("/:id", cursada_docenteControllers.getCursadaDocente);

router.put("/:id", cursada_docenteControllers.updateCursadaDocente);

router.delete("/:id", cursada_docenteControllers.deleteCursadaDocente);

module.exports = router;