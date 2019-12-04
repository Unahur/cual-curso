'use strict';
module.exports = (sequelize, DataTypes) => {
  const correlativa = sequelize.define('correlativa', {
    id_materia: DataTypes.INTEGER,
    id_materia_correlativa: DataTypes.INTEGER
  }, {});
  correlativa.associate = function(models) {
    // associations can be defined here
    correlativa.belongsTo(models.materia),{
      as : 'materia',
      foreignKey: 'id_materia'
    }
    correlativa.belongsTo(models.materia),{
      as : 'materia',
      foreignKey: 'id_materia_correlativa'
    }
  };
  return correlativa;
};