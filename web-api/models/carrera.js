'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    nombre_carrera: DataTypes.STRING
  }, {});
  carrera.associate = function(models) {
    // una carrera muchos estudiante
    carrera.hasMany(models.estudiante,
      {
        as: 'estudiantes',
        foreignkey: 'carreraId'
      }
    )
  };
  return carrera;
};