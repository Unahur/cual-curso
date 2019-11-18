'use strict';
module.exports = (sequelize, DataTypes) => {
  const aula = sequelize.define('aula', {
    nombre_aula: DataTypes.STRING,
    edificio: DataTypes.STRING,
  }, {});
  aula.associate = function(models) {
    // associations can be defined here
    aula.belongsTo(models.cursada, 
      {
        as: 'cursadas',
        foreignKey: 'aulaId' 
      }
    )
  };
  return aula;
};