'use strict';
module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define('profesor', {
    nombre_apellido: DataTypes.STRING,
    dni: DataTypes.INTEGER
  }, {});
  profesor.associate = function(models) {
    profesor.hasMany( models.cursada, 
      {
        as: 'cursada', // voy a mostrar un array de todos los registos, hay que respetar en los controladores el alias (as)
        foreignKey: 'id'
      }
    ),
    profesor.hasMany( models.carrera_profesor,
      {
        as: 'cursada_profesor',
        foreignkey: 'id_profesor'
      }
    )
  };
  return profesor;
};