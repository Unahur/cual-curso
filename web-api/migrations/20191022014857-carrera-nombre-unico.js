'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('carreras', ['nombre'], {
      type: 'unique',
      name: 'carreras_nombre_unique_constraint'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('carreras', 'carreras_nombre_unique_constraint');
  }
};
