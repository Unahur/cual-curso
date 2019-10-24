'use strict';
module.exports = (sequelize, DataTypes) => {
  const tipo = sequelize.define('tipo', {
    nombre: DataTypes.STRING
  }, {});
  tipo.associate = function(models) {
    // associations can be defined here
  };
  return tipo;
};