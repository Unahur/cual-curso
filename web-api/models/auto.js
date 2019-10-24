'use strict';
module.exports = (sequelize, DataTypes) => {
  const auto = sequelize.define('auto', {
    modelo: DataTypes.INTEGER,
    patente: DataTypes.STRING
  }, {});
  auto.associate = function(models) {
    // associations can be defined here
  };
  return auto;
};