'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia_aprobada = sequelize.define('materia_aprobada', {
    id_materia: DataTypes.INTEGER,
    id_estudiante: DataTypes.INTEGER
  }, {});
  materia_aprobada.associate = function(models) {
    // associations can be defined here
    materia_aprobada.belongsTo( models.materias, 
        {
            as: 'materia',
            foreignKey: 'id_materia' 
        }
    ),
    materia_aprobada.belongsTo(models.estudiante, 
        {
            as: 'estudiante',
            foreignKey: 'id_estudiante' 
        }
    )
  };
  return materia_aprobada;
};