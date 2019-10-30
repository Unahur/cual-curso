'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cursada = sequelize.define('Cursada', {
    nombre: DataTypes.STRING
  }, {});
  Cursada.associate = function(models) {
    // associations can be defined here
    Cursada.belongsToMany(models.Docente, {
  
      through: "DocenteCursadas",
      as: "docentes",
      foreignKey:"CursadaId"
    })
  };
  return Cursada;
};