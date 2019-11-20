'use strict';
module.exports = (sequelize, DataTypes) => {
  const cursada = sequelize.define('cursada', {
    dia_hora: DataTypes.STRING,
    materiaId: DataTypes.INTEGER,
    docenteId: DataTypes.INTEGER,
    aulaId: DataTypes.INTEGER
  }, {});
  cursada.associate = function(models) {
    // un cursada muchas aulas
    cursada.hasMany(models.aula,
      {
        as: 'aulas',
        foreignkey: 'id'
      }
    )
    // un cursada muchos docentes
    cursada.hasMany(models.docente,
      {
        as: 'docentes',
        foreignkey: 'id'
      }
    )
    // un cursada muchas materias
    cursada.hasMany(models.materia,
      {
        as: 'materias',
        foreignkey: 'id'
      }
    )
    // un cursada muchos extudiantes_cursadas
    cursada.hasMany(models.estudiante_cursada,
      {
        as: 'estudiante_cursadas',
        foreignkey: 'cursadaId'
      }
    )
  };
  return cursada;
};