'use strict';
module.exports = (sequelize, DataTypes) => {
  const cursadadocente = sequelize.define('cursadadocente', {
    id_cursada: DataTypes.INTEGER,
    id_docente: DataTypes.INTEGER
  }, {});
  cursadadocente.associate = function(models) {
    // associations can be defined here
    cursadadocente.belongsTo(models.cursada, 
      {
        as: 'cursada',
        foreignKey: 'id_cursada'
      }
    )
    cursadadocente.belongsTo(models.docente, 
      {
        as: 'docente',
        foreignKey: 'id_docente'
      }
    )
  };
  return cursadadocente;
};