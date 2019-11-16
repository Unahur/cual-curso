'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cursadas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dia_hora: {
        type: Sequelize.STRING
      },
      aulaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'aula',
          key: 'id',
        }
      },
      docenteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'docente',
          key: 'id',
        }
      },
      materiaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'materia',
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
    return queryInterface.dropTable('cursadas');
  }
};
