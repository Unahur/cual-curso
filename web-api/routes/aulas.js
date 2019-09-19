var express = require("express");//va siempre
var router = express.Router();//va siempre

var models = require("../models");

router.put("/:id", (req, res) => {
  const onSuccess = aula =>
    aula
      .update({ edificio: req.body.edificio,numero_aula: req.body.numero_aula },
         { fields: ["edificio","numero_aula"] })
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
  findAula(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
  });
});

module.exports = router;
