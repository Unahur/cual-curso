var express = require("express");
var router = express.Router();
var models = require("../models");
const Sequelize = require("sequelize");

router.get("/pagina/:index/:input", (req, res) => {
    const pagina = req.params.index;
    const input = req.params.input;
    const limite = 10;
    const pasarPagina = pagina * limite;
    const Op = Sequelize.Op;
    models.materia
        .count()
        .then(materia => {
            return materia;
        })
        .then(registrosTotales => {
            models.materia
                .findAll({
                    attributes: ["id", "name", "description", "duration", "totalHours", "correlativa_id"],
                    where: {name: {[Op.like]: `%${input}%`}},
                    offset: pasarPagina,
                    limit: limite
        })
        .then(materia => res.send([materia, { paginas: registrosTotales / limite }]))
        .catch(() => res.sendStatus(500));
      });
  });
router.get("/pagina/:index", (req, res) => {
    const pagina = req.params.index;
    const input = req.params.input;
    const limite = 10;
    const pasarPagina = pagina * limite;
    models.materia
        .count()
        .then(materia => {
            return materia;
        })
        .then(registrosTotales => {
            models.materia
                .findAll({
                    attributes: ["id", "name", "description", "duration", "totalHours", "correlativa_id"],
                    offset: pasarPagina,
                    limit: limite
        })
        .then(materia => res.send([materia, { paginas: registrosTotales / limite }]))
        .catch(() => res.sendStatus(500));
      });
  });
router.get("/", (req, res) => {
    const pagina = 0;
    const limite = 10;
    let registrosTotales = 0;
    const pasarPagina = pagina * limite;
  
    models.materia
        .count()
        .then(materia => {
            return materia;
        })
        .then(val => {
            totalRegistros = val;
        });
  
    setTimeout(() => {
      models.materia
        .findAll({
            attributes: ["id", "name", "description", "duration", "totalHours", "correlativa_id"],
            offset: pasarPagina,
            limit: limite
        })
        .then(materia =>
            res.send([
                materia,
                {paginas: registrosTotales / limite}
            ])
        )
        .catch(() => res.sendStatus(500));
    }, 100);
});

router.post("/",(req,res)=>{
    models.materia
    .create(req.body)
    .then(materia => res.status(201).send({id: materia.id}))
    .catch(()=>res.sendStatus(500));
});

const findMateria = (id,{onSuccess,onNotFound,onError})=>{
    models.materia
    .findOne({
        attributes:["id","name","description","duration","totalHours", "correlativa_id"],
        where:{ id }
    })
    .then(materia => (materia ? onSuccess(materia):onNotFound()))
    .catch(()=>onError());
};
router.get("/:id",(req,res)=>{
    findMateria(req.params.id,{
        onSuccess: materia => res.send(materia),
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500) 
    });
});

router.put("/:id",(req,res) => {
    const onSuccess = materia => 
    materia
        .update(req.body)
        .then(()=>res.sendStatus(200))
        .catch(()=>res.sendStatus(500));
    findMateria(req.params.id,{
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

router.delete("/:id",(req,res) =>{
    const onSuccess = materia =>
        materia
        .destroy()
        .then(()=> res.sendStatus(200))
        .catch(()=> res.sendStatus(500));
    findMateria(req.params.id,{
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

module.exports = router;

