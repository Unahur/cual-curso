'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiante_cursada = sequelize.define('estudiante_cursada', {
    estudianteId: DataTypes.INTEGER,
    cursadaId: DataTypes.INTEGER,
    nota_materia: DataTypes.INTEGER
  }, {});
  estudiante_cursada.associate = function(models) {
    // correspondencia uno a uno estudiante
    estudiante_cursada.belongsTo(models.estudiante,
      {
        as: 'estudiante',
        foreignkey: 'id'
      }
    )
    // correspondencia uno a uno cursada
    estudiante_cursada.belongsTo(models.cursada,
      {
        as: 'cursada',
        foreignkey: 'id'
      }
    )
  };
  return estudiante_cursada;
};