'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('friends', {
        user_id_1: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        user_id_2: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          }
        }
      },
      {
        timestamps: false,
      })
      .then(() => {
        return queryInterface.sequelize.query('ALTER TABLE friends ADD PRIMARY KEY (user_id_1, user_id_2)');
      })
      // .then(() => {
      //   return queryInterface.sequelize.query('CONSTRAINT CheckOneWay CHECK (user_id_1, user_id_2)');
      // })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('friends');
  }
};
