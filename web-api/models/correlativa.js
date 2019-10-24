'use strict';
module.exports = (sequelize, DataTypes) => {
  const correlativa = sequelize.define('correlativa', {
    nombre: DataTypes.STRING
  }, {});
  correlativa.associate = function(models) {
    // associations can be defined here
  };
  return correlativa;
};