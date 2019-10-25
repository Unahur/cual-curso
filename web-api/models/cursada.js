'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cursada = sequelize.define('Cursada', {
    nombre: DataTypes.STRING
  }, {});
  Cursada.associate = function(models) {
    // associations can be defined here
  };
  return Cursada;
};