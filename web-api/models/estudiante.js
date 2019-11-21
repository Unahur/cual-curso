'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiante = sequelize.define('estudiante', {
    dni: DataTypes.INTEGER,
    nombre_apellido: DataTypes.STRING,
    carreraId: DataTypes.INTEGER
  }, {});
  estudiante.associate = function(models) {
    // un estudiate una carrera
    estudiante.belongsTo(models.carrera,
      {
        as: 'carrera',
        foreignkey: 'id'
      }
    )
    // un estudiante muchas materias aprobadas
    estudiante.hasMany(models.estudiante_materiaAprobada,
      {
        as: 'estudiante_materiaAprobadas',
        foreignkey: 'materiaAprobadaId'
      }
    )
  };
  return estudiante;
};