'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia_cursada = sequelize.define('materia_cursada', {
    id_materia: DataTypes.INTEGER,
    id_cursada: DataTypes.INTEGER
  }, {});
  materia_cursada.associate = function(models) {
    // associations can be defined here
    materia_cursada.belongsTo( models.materias, 
        {
            as: 'materia',
            foreignKey: 'id_materia' 
        }
    ),
    materia_cursada.belongsTo(models.cursada, 
        {
            as: 'cursada',
            foreignKey: 'id_cursada' 
        }
    )
  };
  return materia_cursada;
};