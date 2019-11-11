var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req,res)=>{
    models.materia
    .findAll({
        attributes:["id","name","description","duration", "totalHours", "correlativa_id"],
    })
    .then(materias=>res.send(materias))
    .catch(()=>res.sendStatus(500));
});

router.get("/paginacion/:index", (req,res) =>{
    let page=req.params.index;
    const pageSize=4;
    const offset = page * pageSize;
    const limit = offset + pageSize;
    models.materia
    .findAll({
        attributes:["id","name","description","duration", "totalHours", "correlativa_id"],
        offset,
        limit
    })
    .then(materias=>res.send(materias))
    .catch(()=>res.sendStatus(500));
})

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

module.exports = router;

