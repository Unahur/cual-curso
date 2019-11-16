'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiante_cursada = sequelize.define('estudiante_cursada', {
    estudianteId: DataTypes.INTEGER,
    cursadaId: DataTypes.INTEGER,
    nota: DataTypes.INTEGER,
  }, {});
  estudiante_cursada.associate = function(models) {
    // muchos estudiante_cursada un estudiante
    estudiante_cursada.belongsTo(models.estudiante, 
      {
        as: 'estudiantes',
        foreignKey: 'id' 
      }
    ),
    // muchos estudiante_cursada una cursada
    estudiante_cursada.belongsTo(models.cursada, 
      {
        as: 'cursadas',
        foreignKey: 'id' 
      }
    )
  };
  return estudiante_cursada;
};