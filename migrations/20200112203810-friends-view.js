'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
    CREATE VIEW friends_view
    AS
    SELECT user_id_1,user_id_2
    FROM friends
    UNION ALL
    SELECT user_id_2, user_id_1
    FROM friends
`);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP VIEW friends_view');
  }
};
