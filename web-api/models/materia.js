'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre_materia: DataTypes.STRING
  }, {});
  materia.associate = function(models) {
    // una materia muchas cursadas
    materia.belongsTo(models.cursada, 
      {
        as: 'cursadas',
        foreignKey: 'materiaId' 
      }
    )
  };
  return materia;
};