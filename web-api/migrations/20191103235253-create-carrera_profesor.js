'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('carrera_profesor', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_carrera: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'carrera',
          key: 'id',
        }       
      },
      id_profesor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'profesor',
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
      return queryInterface.dropTable('carrera_profesor');
  }
};