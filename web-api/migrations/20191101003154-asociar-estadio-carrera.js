'use strict';
//un estadio puede tener multiples carreras
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'carrera', //a la tabla carrera se le agregar la columna estadio_id
      'estadio_id', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'estadio', //estadio_id hace referencia a la tabla estadio
          key: 'id', // primarykey id
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'carrera', //a la tabla carrera se le remueve la columna estadio_id
      'estadio_id' // key we want to remove
    );
  }
};