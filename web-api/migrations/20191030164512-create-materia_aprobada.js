'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('materia_aprobada', {
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
      id_estudiante: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'estudiante',
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
      return queryInterface.dropTable('materia_aprobada');
  }
};