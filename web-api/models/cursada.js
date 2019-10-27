'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cursada = sequelize.define('Cursada', {
    nombre: DataTypes.STRING
  }, {});
  Cursada.associate = function(models) {
    // associations can be defined here
    Cursada.belongsToMany(models.docente, {
      through: 'DocenteCursadas',
      as: 'docente',
      foreignKey: 'cursadaId',
      otherKey: 'docenteId'
    });
  return Cursada;
}};