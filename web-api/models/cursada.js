'use strict';
module.exports = (sequelize, DataTypes) => {
  const cursada = sequelize.define('cursada', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    docente: DataTypes.STRING
  }, {});
  cursada.associate = function(models) {
    cursada.belongsTo(models.aula)
  };
  return cursada;
};