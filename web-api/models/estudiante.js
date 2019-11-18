'use strict';
module.exports = (sequelize, DataTypes) => {
  const estudiante = sequelize.define('estudiante', {
    dni: DataTypes.INTEGER,
    nombre_apellido: DataTypes.STRING,
    carreraId: DataTypes.INTEGER,
  }, {});
  estudiante.associate = function(models) {
    // associations can be defined here
    estudiante.belongsTo(models.carrera, 
      {
          as: 'carreras',
          foreignKey: 'id' 
      }
  )
  };
  return estudiante;
};