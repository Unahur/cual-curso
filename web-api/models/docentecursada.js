'use strict';
module.exports = (sequelize, DataTypes) => {
  const DocenteCursada = sequelize.define('DocenteCursada', {
    docenteId: DataTypes.INTEGER,
    cursadaId: DataTypes.INTEGER
  }, {});
  DocenteCursada.associate = function(models) {
    // associations can be defined here
  };
  return DocenteCursada;
};