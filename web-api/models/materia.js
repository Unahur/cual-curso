'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    totalHours: DataTypes.INTEGER
  }, {});
  materia.associate = function(models) {
 /*    materia.belongTo(models.correlativa)
    // associations can be defined here */
  };
  return materia;
};