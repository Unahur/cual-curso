'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('materia_cursada', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_materia: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'materia',
          key: 'id',
        }       
      },
      id_cursada: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'cursada',
          key: 'id',
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
      return queryInterface.dropTable('materia_cursada');
  }
};