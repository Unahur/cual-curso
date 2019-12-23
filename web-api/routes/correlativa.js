var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/",(req,res)=>{
    models.correlativas
    .findAll({
        attributes:["id","id_materia","id_materia_correlativa"]
    })//aca se hace un get de todas las correlativas
    .then(correlativa=>res.send(correlativa))
    .catch(()=>res.sendStatus(500));
});

router.post("/",(req,res)=>{
    models.correlativas
    .create(req.body)
    .then(correlativas => res.status(201).send({id: correlativas.id}))
    .catch(()=>res.sendStatus(500));
});

const findcorrelativas = (id,{onSuccess,onNotFound,onError})=>{
    models.correlativas
    .findOne({
        attributes:["id","id_materia","id_materia_correlativa"],
        where:{ id }
    })//aca se busca la materia por id
    .then(correlativas => (correlativas ? onSuccess(correlativas):onNotFound()))
    .catch(()=>onError());
};
router.get("/:id",(req,res)=>{
    findcorrelativas(req.params.id,{
        onSuccess: correlativas => res.send(correlativas),
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500) 
    });
});

router.put("/:id",(req,res) => {
    const onSuccess = correlativas => 
    correlativas
        .update(req.body)
        .then(()=>res.sendStatus(200))
        .catch(()=>res.sendStatus(500));
    findcorrelativas(req.params.id,{
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

router.delete("/:id",(req,res) =>{
    const onSuccess = correlativas =>
    correlativas
        .destroy()
        .then(()=> res.sendStatus(200))
        .catch(()=> res.sendStatus(500));
    findcorrelativas(req.params.id,{
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
});

module.exports = router;

