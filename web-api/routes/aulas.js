var express = require("express");
var router = express.Router();

const aulaControllers = require('../controllers/aulas.controllers');

router.get("/", aulaControllers.getAulas);

router.post("/", aulaControllers.postAula);

router.get("/:id", aulaControllers.getAula);

router.put("/:id", aulaControllers.updateAula);

router.delete("/:id", aulaControllers.deleteAula);

module.exports = router;
