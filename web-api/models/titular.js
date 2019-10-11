'use strict';
module.exports = (sequelize, DataTypes) => {
  const titular = sequelize.define('titular', {
    nombre: DataTypes.STRING,
    dni: DataTypes.STRING
  }, {});
  titular.associate = function(models) {
    // associations can be defined here
  };
  return titular;
};