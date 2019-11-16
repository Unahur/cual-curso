'use strict';
// modificacion del nombre por squelize !!!
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estudiante_cursadas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      estudianteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'estudiante',
          key: 'id',
        }       
      },
      cursadaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: 'cursada',
          key: 'id',
        }
      },
      nota: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('estudiante_cursadas');
  }
};