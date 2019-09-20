'use strict';
module.exports = (sequelize, DataTypes) => {
  const pizarron = sequelize.define('pizarron', {
    nombre: DataTypes.STRING
  }, {});
  pizarron.associate = function(models) {
    // associations can be defined here
  };
  return pizarron;
};