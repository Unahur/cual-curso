'use strict';
module.exports = (sequelize, DataTypes) => {
  const Docente = sequelize.define('Docente', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    sexo: DataTypes.STRING
    },
    {}
  );
  Docente.associate = function(models) {
    // associations can be defined here
    Docente.belongsToMany(models.Cursada, {
      through: "DocenteCursadas",
      as: "cursadas",
      foreignKey:"DocenteId"

    })
  };
  return Docente;
};