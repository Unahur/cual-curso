'use strict';
module.exports = (sequelize, DataTypes) => {
  const docente = sequelize.define('docente', {
    nombre: DataTypes.STRING,
    dni: DataTypes.INTEGER
  }, {});
  docente.associate = function(models) {
    // associations can be defined here
    docente.hasMany(models.cursadadocente,
      {
        as: 'cursadas',
        foreignKey: 'id_docente'
      }  
    )
  };
  return docente;
};