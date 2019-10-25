'use strict';
module.exports = (sequelize, DataTypes) => {
  const DocenteCursada = sequelize.define('DocenteCursada', {
    docenteId: DataTypes.UUID,
    cursadaId: DataTypes.UUID
  }, {});
  DocenteCursada.associate = function(models) {
    // associations can be defined here
  };
  return DocenteCursada;
};