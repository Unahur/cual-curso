'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'correlativa', 
      'id_materia',  
      {
        type: Sequelize.UUID,
        references: {
          model: 'materia',
          key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
      .then(() => {
        return queryInterface.addColumn(
          'materia', 
          'id_correlativa', 
          {
            type: Sequelize.UUID,
            references: {
              model: 'correlativa', 
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'correlativa',
      'id_materia' 
      )
      .then(() => {
        return queryInterface.removeColumn(
          'materia', 
          'id_correlativa' 
        );
      })
      
  }
};