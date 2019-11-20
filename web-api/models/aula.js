'use strict';
module.exports = (sequelize, DataTypes) => {
  const aula = sequelize.define('aula', {
    nombre_aula: DataTypes.STRING,
    edificio: DataTypes.STRING
  }, {});
  aula.associate = function(models) {
    // un aula una cursada
    aula.belongsTo(models.cursada,
      {
        as: 'cursada',
        foreignkey: 'cursadaId'
      }
    )
  };
  return aula;
};