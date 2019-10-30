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
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      dia_hora: {
        type: Sequelize.DATE
      },
      id_materia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'materia',
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
    

      
      return queryInterface.dropTable('cursadas');
    
  }
};