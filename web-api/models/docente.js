'use strict';
module.exports = (sequelize, DataTypes) => {
  const docente = sequelize.define('docente', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    sexo: DataTypes.STRING
  }, {});
  docente.associate = function(models) {
    // associations can be defined here
    docente.belongsToMany(models.Cursada, {
      through: 'DocenteCursadas',
      as: 'Cursada',
      foreignKey: 'docenteId',
      otherKey: 'cursadaId'
    });
  return docente;
}};