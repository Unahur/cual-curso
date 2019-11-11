'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    totalHours: DataTypes.INTEGER,
    correlativa_id: {
      type: DataTypes.INTEGER,
      references: 'correlativa', 
      referencesKey: 'id'
    }
  }, {});
  materia.associate = function(models) {
    materia.hasMany(models.correlativa)
  };
  return materia;
};
