'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DocenteCursadas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      docenteId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Docentes",
          key: "id"
        }
      },
      cursadaId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Cursadas",
          key:"id"
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
    return queryInterface.dropTable('DocenteCursadas');
  }
};