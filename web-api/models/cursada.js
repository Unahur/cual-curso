'use strict';
module.exports = (sequelize, DataTypes) => {
  const cursada = sequelize.define('cursada', {
    dia_hora: DataTypes.STRING,
    aulaId: DataTypes.INTEGER,
    docenteId: DataTypes.INTEGER,
    materiaId: DataTypes.INTEGER
  }, {});
  cursada.associate = function(models) {
    // una cursada muchas materias
    cursada.hasMany(models.materia, 
      {
        as: 'materias',
        foreignKey: 'id' 
      }
    ),
    // una cursada muchos docentes
    cursada.hasMany(models.docente, 
      {
        as: 'docentes',
        foreignKey: 'id' 
      }
    ),
    // una cursada muchas aulas
    cursada.hasMany(models.aula, 
      {
        as: 'aulas',
        foreignKey: 'id' 
      }
    ),
    // una cursada muchos estudantes x cursada
    cursada.belongsTo(models.estudiante_cursada, 
      {
        as: 'estudiantes_cursadas',
        foreignKey: 'cursadaId' 
      }
    )
  };
  return cursada;
};