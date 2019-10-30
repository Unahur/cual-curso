'use strict';
module.exports = (sequelize, DataTypes) => {
  const materias = sequelize.define('materias', {
    nombre_materia: DataTypes.STRING
  }, {});
  materias.associate = function(models) {
    // associations can be defined here
    materias.hasMany( models.materia_aprobada, 
      {
        as: 'materias_aprobadas', // voy a mostrar un array de todos los registos, hay que respetar en los controladores el alias (as)
        foreignKey: 'id_materia'
      }
    )
  };
  return materias;
};