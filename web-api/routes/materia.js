var express = require("express");
var router = express.Router();
var models = require("../models");
const Sequelize = require("sequelize");//aca se importa sequelize, para usar los operadores.
//la razon para darle una ruta mas "/pagina"
//fue para que no se superponga con :id
//y en vez de buscar el objeto, busque la pagina.
router.get("/pagina/:index/:input", (req, res) => {
    const pagina = req.params.index;//aca se ingresa la pagina donde se desea estar
    const input = req.params.input;//aca se ingresa el input de lo que se quiere filtrar
    const limite = 10;//aca se asigna el limite de items por pagina.
    const pasarPagina = pagina * limite;//aca bueno como su nombre lo dice se pasa de pagina.
    const Op = Sequelize.Op;//aca se asigna el operador para usarlo mas tarde
    models.materia
        .count()//aca se cuenta todo lo que esta en la base de datos.
        .then(materia => {
            return materia;
        })//en esta promesa se retorna el numero de materia y se lo manda a registros totales.
        .then(registrosTotales => {
            models.materia
                .findAll({
                    attributes: ["id", "name", "description", "duration", "totalHours"],
                    include: [{ as: 'correlativas', model: models.correlativas, attributes: ["id","id_materia_correlativa"] }],
                    where: {[Op.or]: [{name: {[Op.like]: `%${input}%`}}, {description: {[Op.like]: `%${input}%`}}, {duration: {[Op.like]: `%${input}%`}}, {totalHours: {[Op.like]: `%${input}%`}}]},
                    offset: pasarPagina,
                    limit: limite
                })//aca se traen los atributos, y la asociacion donde, haya coincidencia en uno de los atributos, se pasa de pagina y se asigna el limite.
        .then(materia => res.send([materia, { paginas: Math.ceil(registrosTotales / limite) }]))//aca se envian las materias, y las paginas.
        .catch(() => res.sendStatus(500));
    });
});
router.get("/pagina/:index", (req, res) => {
    const pagina = req.params.index;
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
                    attributes: ["id", "name", "description", "duration", "totalHours"],
                    include: [{ as: 'correlativas', model: models.correlativas, attributes: ["id","id_materia_correlativa"] }],
                    offset: pasarPagina,
                    limit: limite
        })
        .then(materia => res.send([materia, { paginas: Math.ceil(registrosTotales / limite) }]))
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
            registrosTotales = val;
        });
  
    setTimeout(() => {
      models.materia
        .findAll({
            attributes: ["id", "name", "description", "duration", "totalHours"],
            include: [{ as: 'correlativas', model: models.correlativas, attributes: ["id","id_materia_correlativa"] }],
            offset: pasarPagina,
            limit: limite
        })
        .then(materia =>
            res.send([
                materia,
                {paginas: Math.ceil(registrosTotales / limite)}
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
});//aca se mandan los atributos de la materia y se los inserta en la base de datos.

const findMateria = (id,{onSuccess,onNotFound,onError})=>{
    models.materia
    .findOne({
        attributes:["id","name","description","duration","totalHours"],
        include:[{ as: 'correlativas', model: models.correlativas, attributes: ["id_materia_correlativa"] }],
        where:{ id }
    })//aca se busca la materia con la id, y trae la materia, con su correlativa.
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
        .update({ name: req.body.name, description: req.body.description, duration: req.body.duration, totalHours: req.body.totalHours }, { fields: ["name", "description", "duration", "totalHours"] })
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

