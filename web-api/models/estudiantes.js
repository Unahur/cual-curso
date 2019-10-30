'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiantes = sequelize.define('estudiantes', {
    dni: DataTypes.INTEGER,
    nombre_apellido: DataTypes.STRING,
    carrera: DataTypes.STRING
  }, {});
  estudiantes.associate = function(models) {
    // associations can be defined here
    estudiantes.hasMany(models.materia_aprobada,
      {
       as: 'materias_aprobadas',
       foreignKey: 'id_estudiante'
      })
  };
  return estudiantes;
};