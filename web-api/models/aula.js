'use strict';
module.exports = (sequelize, DataTypes) => {
  const aula = sequelize.define('aula', {
    edificio: DataTypes.STRING,
    numero_aula: DataTypes.INTEGER
  }, {});
 //aqui se crea la tabla aula con sus atributos edificio,numero_aula


  aula.associate = function(models) {
    //por ahora no es nesesario calcular ningun atributo partir de otros atributos
  };
  return aula;
};