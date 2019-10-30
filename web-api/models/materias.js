'use strict';
module.exports = (sequelize, DataTypes) => {
  const materias = sequelize.define('materias', {
    nombre_materia: DataTypes.STRING
  }, {});
  materias.associate = function(models) {
    // associations can be defined here
    materias.hasMany(models.materia_aprobada,
      {
        as: 'materias_aprobadas',
        foreignKey: 'id_materia'
      }

    )
  };
  return materias;
};