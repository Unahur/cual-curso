var express = require("express");
var router = express.Router();

const cursadaControllers = require('../controllers/cursadas.controllers');

router.get("/", cursadaControllers.getCursadas);

router.post("/", cursadaControllers.postCursada);

router.get("/:id", cursadaControllers.getCursada);

router.put("/:id", cursadaControllers.updateCursada);

router.delete("/:id", cursadaControllers.deleteCursada);

module.exports = router;
