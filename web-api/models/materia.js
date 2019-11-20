'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre_materia: DataTypes.STRING
  }, {});
  materia.associate = function(models) {
    // un materia una cursada
    materia.belongsTo(models.cursada,
      {
        as: 'cursada',
        foreignkey: 'materiaId'
      }
    )
  };
  return materia;
};