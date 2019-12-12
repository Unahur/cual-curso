'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    totalHours: DataTypes.INTEGER
  }, {});
  materia.associate = function(models) {
    // associations can be defined here
    materia.hasMany(models.correlativa,
      {
      as: 'correlativas',
      foreignKey: 'id_materia'
    })
   
  };
  return materia;
};