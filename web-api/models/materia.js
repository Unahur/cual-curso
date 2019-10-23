'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    totalHours: DataTypes.INTEGER
  }, {});
  materia.associate = function(models) {
    materia.hasMany(models.correlativa)
    // associations can be defined here
  };
  return materia;
};