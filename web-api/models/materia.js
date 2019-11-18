'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre: DataTypes.STRING,
    profesor: DataTypes.STRING,
    dia: DataTypes.STRING,
    horario: DataTypes.STRING,
    correlativa: DataTypes.BOOLEAN
  }, {});
  materia.associate = function(models) {
    // associations can be defined here
  };
  return materia;
};