'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('carreras', [{
      nombre: 'carrera 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'carrera 2',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('carreras', null, {});
  }
};
