'use strict';
module.exports = (sequelize, DataTypes) => {
  const cursada = sequelize.define('cursada', {
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    dia_hora: DataTypes.DATE,
    id_materia: DataTypes.INTEGER,
    id_aula: DataTypes.INTEGER
  }, {});
  cursada.associate = function(models) {
    cursada.belongsTo(models.materia, 
      {
        as: 'materia',
        foreignKey: 'id_materia'
      }
    )
    cursada.belongsTo(models.aula, 
      {
        as: 'aula',
        foreignKey: 'id_aula'
      }
    )
    cursada.hasMany(models.cursadadocente,
      {
        as: 'cursadadocente',
        foreignKey: 'id_cursada'
      }
    )
  };
  return cursada;
};