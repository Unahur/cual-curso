'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
      return queryInterface.createTable('cursadasdocentes', { 
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
        id_materia: {
          type: Sequelize.INTEGER,
          reference: {
            model: 'materia',
            key: 'id'
          }
        }
      })
    },
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    return queryInterface.dropTable('cursadasdocentes');
  }

}
