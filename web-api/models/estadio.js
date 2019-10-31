'use strict';
module.exports = (sequelize, DataTypes) => {
  const estadio = sequelize.define('estadio', {
    nombre: DataTypes.STRING,
    unique: true
  }, {});
  estadio.associate = function(models) {
    estadio.belongsTo(models.carrera)//estadio pertenece a carrera
  };
  return estadio;
};
