'use strict';
module.exports = (sequelize, DataTypes) => {
  const cursada = sequelize.define('cursada', {
    dia_hora: DataTypes.STRING,
    aula: DataTypes.STRING
  }, {});
  cursada.associate = function(models) {
    cursada.belongsTo( models.profesor, 
      {
        as: 'profesor', // voy a mostrar un array de todos los registos, hay que respetar en los controladores el alias (as)
        foreignKey: 'id'
      }
    ),
    cursada.hasMany( models.materia_cursada,
      {
        as: 'materia_cursada',
        foreignKey: 'id_cursada'
      }
    )
  };
  return cursada;
};