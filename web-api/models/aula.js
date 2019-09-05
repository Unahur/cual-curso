'use strict';
module.exports = (sequelize, DataTypes) => {
  const aula = sequelize.define('aula', {
    edificio: DataTypes.STRING,
    number:DataTypes.number,
    materias: DataTypes.STRING,


  }, {});
  aula.associate = function(models) {
      //No tenemos ninguna funcionalidad
    // associations can be defined here
  };
  return aula;
};