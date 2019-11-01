'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'carrera', // name of Source model
      'estadio_id', // name of the key we're adding 
      {
        type: Sequelize.UUID,
        references: {
          model: 'estadio', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'carrera', // name of Source model
      'estadio_id' // key we want to remove
    );
  }
};