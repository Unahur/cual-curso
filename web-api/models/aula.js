'use strict';
module.exports = (sequelize, DataTypes) => {
  const aula = sequelize.define('aula', {
    edificio: DataTypes.STRING,
    numero_aula: DataTypes.INTEGER
  }, {});
  aula.associate = function(models) {
    // associations can be defined here
  };
  return aula;
};