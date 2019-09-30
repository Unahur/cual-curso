'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiantes = sequelize.define('estudiantes', {
    dni: DataTypes.INTEGER,
    nombre_apellido: DataTypes.STRING
  }, {});
  estudiantes.associate = function(models) {
    // associations can be defined here
  };
  return estudiantes;
};