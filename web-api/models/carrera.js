'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    nombre_carrera: DataTypes.STRING
  }, {});
  carrera.associate = function(models) {
    // associations can be defined here
    carrera.hasMany(models.estudiante, 
      {
          as: 'estudiantes',
          foreignKey: 'carreraId' 
      }
  )
  };
  return carrera;
};