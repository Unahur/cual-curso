'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiante = sequelize.define('estudiante', {
    dni: DataTypes.INTEGER,
    nombre_apellido: DataTypes.STRING
  }, {});
  estudiante.associate = function(models) {
    // associations can be defined here
    estudiante.hasMany( models.materia_aprobada, 
      {
        as: 'materias_aprobadas', // voy a mostrar un array de todos los registos, hay que respetar en los controladores el alias (as)
        foreignKey: 'id_estudiante'
      }
    ),
    estudiante.belongsTo( models.carrera,
      {
        as: 'carrera',
        foreignKey: 'id'
      }
    )
  };
  return estudiante;
};