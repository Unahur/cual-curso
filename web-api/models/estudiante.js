'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiante = sequelize.define('estudiante', {
    dni: DataTypes.INTEGER,
    nombre_apellido: DataTypes.STRING
  }, {});
  estudiante.associate = function(models) {
    // associations can be defined here
  };
  return estudiante;
};