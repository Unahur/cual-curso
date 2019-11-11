'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'materia',
      'correlativa_id',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'correlativa',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'materia',
      'correlativa_id'
      ) 
  }
};
