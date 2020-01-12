'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('friends', [
      {
        user_id_1: 1,
        user_id_2: 2,
      },
      {
        user_id_1: 1,
        user_id_2: 3,
      },
      {
        user_id_1: 1,
        user_id_2: 4,
      },
      {
        user_id_1: 2,
        user_id_2: 3,
      },
      {
        user_id_1: 2,
        user_id_2: 4,
      },
      {
        user_id_1: 4,
        user_id_2: 5,
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('friends', null, {'truncate':true});
  }
};
