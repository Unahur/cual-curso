'use strict';
module.exports = (sequelize, DataTypes) => {
  const aula = sequelize.define('aula', {
    edificio: DataTypes.STRING,
    numero_aula: DataTypes.INTEGER,
    cursada_id: DataTypes.INTEGER,
    cursada_id: {
      type: DataTypes.INTEGER,
      references: 'cursadas', 
      referencesKey: 'id'
    }

  },{}
  );

  aula.associate = function(models) {
  aula.hasMany(models.cursada)
  };
  return aula;
  
};