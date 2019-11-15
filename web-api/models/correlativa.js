'use strict';
module.exports = (sequelize, DataTypes) => {
  const correlativa = sequelize.define('correlativa', {
    name: DataTypes.STRING
  },{ }
  );
  correlativa.associate = function(models) {
    console.log(models.materia);
    correlativa.hasOne(models.materia);  
  };
  return correlativa;
};