'use strict';
module.exports = (sequelize, DataTypes) => {
  const correlativas = sequelize.define('correlativas', {
    id_materia_correlativa: DataTypes.INTEGER,
    id_materia: DataTypes.INTEGER
  },{ }//aca se definen los atributos y el tipo que le tienen que llegar al modelo
  );
  correlativas.associate = models => {
    console.log(models.materia);
    correlativas.belongsTo(models.materia, 
      {
        as: 'materia',
        foreignKey: 'id_materia',
      }//aca se define la clave foranea de materia.
    ) 
  };
  return correlativas;
};