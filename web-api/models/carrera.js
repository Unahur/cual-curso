'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    nombre: DataTypes.STRING,
    unique: true
  }, {});
  carrera.associate = function(models) {
    carrera.belongsTo(models.estadio);
  };
  return carrera;
};
