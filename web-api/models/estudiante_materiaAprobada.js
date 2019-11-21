'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiante_materiaAprobada = sequelize.define('estudiante_materiaAprobada', {
    estudianteId: DataTypes.INTEGER,
    materiaAprobadaId: DataTypes.INTEGER
  }, {});
  estudiante_materiaAprobada.associate = function(models) {
    // correspondencia uno a uno estudiante
    estudiante_materiaAprobada.belongsTo(models.estudiante,
      {
        as: 'estudiante',
        foreignkey: 'id'
      }
    )
    // correspondencia uno a uno materiaAprobada 
    estudiante_materiaAprobada.belongsTo(models.materiaAprobada,
      {
        as: 'materiaAprobada',
        foreignkey: 'id'
      }
    )
  };
  return estudiante_materiaAprobada;
};