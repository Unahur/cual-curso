'use strict';
module.exports = (sequelize, DataTypes) => {
  const correlativa = sequelize.define('correlativa', {
    id_materias_correlativa: DataTypes.INTEGER
  }, {});
  correlativa.associate = function(models) {
    console.log(models.materia);
    correlativa.hasMany(models.materia);  
    //correlativa.belongTo(models.materia);
    // associations can be defined here
  };
  return correlativa;
};