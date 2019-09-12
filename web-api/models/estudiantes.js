'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiantes = sequelize.define('estudiantes', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    tipoDni: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    genero: DataTypes.STRING
  }, {});
  estudiantes.associate = function(models) {
    // associations can be defined here
  };
  return estudiantes;
};