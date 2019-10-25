'use strict';
module.exports = {
  
  up: function(queryInterface, Sequelize) {
    console.log('migrando')
    // logic for transforming into the new state
    return queryInterface.addColumn(
      'aulas',
      'cursada_id',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'cursadas', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    }
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'aulas', // name of Source model
      'cursada_id' // key we want to remove
    )
  }
};

