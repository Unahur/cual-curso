'use strict';
module.exports = (sequelize, DataTypes) => {
  const cursada = sequelize.define('cursada', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {});
  cursada.associate = function(models) {
    // associations can be defined here
  };
  return cursada;
};