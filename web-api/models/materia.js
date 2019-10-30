'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre: DataTypes.STRING
  }, {});
  materia.associate = function(models) {
    materia.hasMany(models.cursada, 
      { as: 'cursadas',
        foreignKey: 'id_materia'
      }
    )
  };
  return materia;
};