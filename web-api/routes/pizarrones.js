var express = require("express");
var router = express.Router();
var models = require("../models");

const misFiltros = {
  attributes: ["id", "nombre"]
}

router.get("/", (req, res) => {
  console.log('---------------me pidieron los pizarrones')
  models.pizarron.findAll(misFiltros)
  .then((pizarrones) => {
    console.log('----------voy a responder con estos pizarrones:', pizarrones)
    res.send(pizarrones)
  })
  .catch(error => {
    console.log('------------el error que tuve', error)
    res.send(500)
  });

});



router.put("/:id", (req, res) => {

  const hacerSiSalioTodoBien = miPizarron => {
    console.log('--------miPizarron', miPizarron)

    if (miPizarron) {
      console.log('-----------actualizando el pizarron con id ', req.params.id)
      console.log('---------el nombre que le voy a poner', req.body.nombre)
      miPizarron.update({ nombre: req.body.nombre }, { fields: ["nombre"] })
      .then(pizarronActualizado => res.sendStatus(200))
      .catch(() => res.sendStatus(500))

    }
    else {
      res.sendStatus(404)
    }
  }

  const hacerSiSalioTodoMal = error => {
    console.log('------------el error que tuve', error)
    res.send(500)
  }

  console.log("-----------el id que recibí por parámetro", req.params.id)
  models.pizarron
  .findOne({
    where: { id: req.params.id }
  })
  .then(hacerSiSalioTodoBien)
  .catch(hacerSiSalioTodoMal);
});

module.exports = router;
