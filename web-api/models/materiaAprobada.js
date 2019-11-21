'use strict';
module.exports = (sequelize, DataTypes) => {
  const materiaAprobada = sequelize.define('materiaAprobada', {
    nombre_materia: DataTypes.STRING,
    nota_materia: DataTypes.STRING
  }, {});
  materiaAprobada.associate = function(models) {
    // un materiaAprobada muchas materias aprobadas
    materiaAprobada.hasMany(models.estudiante_materiaAprobada,
      {
        as: 'estudiante_materiaAprobadas',
        foreignkey: 'materiaAprobadaId'
      }
    )
  };
  return materiaAprobada;
};