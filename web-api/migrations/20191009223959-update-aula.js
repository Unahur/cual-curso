'use strict';
module.exports = {
  
  up: function(queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn(
      'aulas',
      'cursada_id',
    Sequelize.INTEGER
    );

  },

  down: (queryInterface, Sequelize) => {

  }
};

