'use strict';
module.exports = (sequelize, DataTypes) => {
  const docente = sequelize.define('docente', {
    nombre_apellido_docente: DataTypes.STRING
  }, {});
  docente.associate = function(models) {
    // una materia muchas cursadas
    docente.belongsTo(models.cursada, 
      {
        as: 'cursadas',
        foreignKey: 'docenteId' 
      }
    )
  };
  return docente;
};