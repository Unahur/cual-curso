'use strict';
module.exports = (sequelize, DataTypes) => {
  const docente = sequelize.define('docente', {
    nombre_docente: DataTypes.STRING
  }, {});
  docente.associate = function(models) {
    // un docente una cursada
    docente.belongsTo(models.cursada,
      {
        as: 'cursada',
        foreignkey: 'docenteId'
      }
    )
  };
  return docente;
};