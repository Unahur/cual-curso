'use strict';
module.exports = (sequelize, DataTypes) => {
  const estadio = sequelize.define('estadio', {
    calle: DataTypes.STRING,
    tamanio: DataTypes.INTEGER
  }, {});
  estadio.associate = function(models) {
    estadio.hasMany(models.carrera);  };
  return estadio;
};
