'use strict';
module.exports = (sequelize, DataTypes) => {
  const aula = sequelize.define('aula', {
    edificio: DataTypes.STRING,
    nro_aula: DataTypes.INTEGER
  }, {});
  aula.associate = function(models) {
    // associations can be defined here
    aula.hasMany(models.cursada,
      {
        as: 'cursadas',
        foreignKey: 'id_aula'
      }
    )
  };
  return aula;
};