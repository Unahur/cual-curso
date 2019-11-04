'use strict';
module.exports = (sequelize, DataTypes) => {
  const carrera_profesor = sequelize.define('carrera_profesor', {
    id_carrera: DataTypes.INTEGER,
    id_profesor: DataTypes.INTEGER
  }, {});
  carrera_profesor.associate = function(models) {
    // associations can be defined here
    carrera_profesor.belongsTo( models.carrera, 
        {
            as: 'carrera',
            foreignKey: 'id_carrera' 
        }
    ),
    carrera_profesor.belongsTo(models.profesor, 
        {
            as: 'profesor',
            foreignKey: 'id_profesor' 
        }
    )
  };
  return carrera_profesor;
};