var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/",(req,res)=>{
    models.correlativa
    .findAll({
        attributes:["id","name"]
    })
    .then(correlativas=>res.send(correlativas))
    .catch(()=>res.sendStatus(500));
});

router.post("/",(req,res)=>{
    models.correlativa
    .create(req.body)
    .then(correlativa => res.status(201).send({id: correlativa.id}))
    .catch(()=>res.sendStatus(500));
});

const findCorrelativa = (id,{onSuccess,onNotFound,onError})=>{
    models.correlativa
    .findOne({
    attributes:["id","name"],
    where:{ id }
    })
    .then(correlativa => (correlativa ? onSuccess(correlativa):onNotFound()))
    .catch(()=>onError());
};
router.get("/:id",(req,res)=>{
    findCorrelativa(req.params.id,{
        onSuccess: correlativa => res.send(correlativa),
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500) 
    });
});

router.put("/:id",(req,res) => {
    const onSuccess = correlativa => 
    correlativa
        .update(req.body)
        .then(()=>res.sendStatus(200))
        .catch(()=>res.sendStatus(500));
    findCorrelativa(req.params.id,{
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

router.delete("/id",(req,res) =>{
    const onSuccess = correlativa =>
    correlativa
        .destroy()
        .then(()=> res.sendStatus(200))
        .catch(()=> res.sendStatus(500));
    findCorrelativa(req.params.id,{
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

module.exports = router;

