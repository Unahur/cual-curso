'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Docentes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellido: {
        allowNull: false,
        type: Sequelize.STRING
      },
      dni: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
/*       sexo: {
        allowNull: false,
        type: Sequelize.STRING
      }, */
      createdAt: {
        //allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        //allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Docentes');
  }
};