'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define('carrera', {
    nombre: DataTypes.STRING
  }, {});
  carrera.associate = function(models) {
    // associations can be defined here
    carrera.hasMany( models.carrera_profesor, 
      {
        as: 'carrera_profesor', // voy a mostrar un array de todos los registos, hay que respetar en los controladores el alias (as)
        foreignKey: 'id_carrera'
      }
    ),
    carrera.hasMany( models.estudiante,
      {
        as: 'estudiante',
        foreignKey: 'id'
      }
    )
  };
  return carrera;
};

