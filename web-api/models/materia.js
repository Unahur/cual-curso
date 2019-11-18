'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    totalHours: DataTypes.INTEGER,
  }, {});//aca se definen los atributos y el tipo que le tienen que llegar al modelo
  materia.associate = models =>{
    materia.hasMany(models.correlativas, 
      {
        as: 'correlativas',
        foreignKey: 'id_materia'
      }//aca se define el 1 a muchos, se define la clave foranea en correlativas
    )
  };
  return materia;
};