var express = require("express");
var router = express.Router();
var models = require("../models");
router.get("/", (req,res) => {
  models.materia
    .findAll({
       attributes: ["id", "name", "description", "duration", "totalHours"]
    })
    .then(materia => res.send(materia))
    .catch(() => res.sendStatus(500));       
});

router.post("/", (req,res) =>{
    models.materia
    .create(req.body)
    .then(materia => res.sendStatus(200).send({id: materia.id}))
    .catch(() => res.sendStatus(500));
});

const findMateria = (id,{ onSuccess, onNotFound, onError}) =>{
    models.materia
    .findOne({
        attributes:["id", "name", "description", "duration", "totalHours"],
        include:[{ as: 'correlativas', model: models.correlativa, attributes: ["id_materia_correlativa"] }],
        where: {id}
    })
    .then(materia => (materia ? onSuccess(materia) : onNotFound))
    .catch(() => onError());
};
router.get("/:id", (req,res) =>{
    findMateria(req.params.id,{
        onSuccess: materia => res.send(materia),
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

router.put("/:id", (req,res) =>{
    const onSuccess = materia =>
    materia
      .update(req.body)
      .then(() => res.sendStatus(200))
      .catch(() => res.sendStatus(500));
    findMateria(req.params.id, {
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

router.delete("/:id", (req,res) =>{
    const onSuccess = materia =>
    materia
      .destroy()
      .then(() => res.send(200))
      .catch(() => res.sendStatus(500))
    findMateria(req.params.id,{
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

/*router.post("/",(req,res)=>{
    const ids_correlativas = req.body.correlativas;

    models.materia
    .create(req.body)
    .then(materia => res.status(201).send({id: materia.id}))
    .catch(()=>res.sendStatus(500));
});
console.log(req.body);
    promises = ids_correlativas.map(id_correlativa =>
        models.correlativas.create({
            id_materia: materia.id,
            id_materia_correlativa: id_correlativa
        }));
    Promise.all(promises)
        .then(correlativas => {
            ids_correlativas = correlativas.map(correlativa => correlativa.id_materia_correlativa)
            res.status(201).send({id: materia.id, correlativas: ids_correlativas}
                )})
     
        .catch(()=>res.sendStatus(500))
        console.log(error);*/


module.exports = router;