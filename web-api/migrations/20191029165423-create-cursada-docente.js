'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cursadas_docentes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_cursada: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'cursada',
          key: 'id'
        }
      },
      id_docente: {
        type: Sequelize.INTEGER,
        reference: {
          model: 'docente',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cursadas_docentes');
  }
};