var models = require('../models');

module.exports = {
  getUsers: function (options) {
    return models.User.findAll(options);
  },
  getFriends: function (userId) {
    return models.sequelize.query(
      `
    SELECT users.*
    FROM users
    inner JOIN friends_view on user_id_2 = users.id
    where friends_view.user_id_1 = :userId`,
      {
        model: models.User,
        replacements: {
          userId: userId
        }
      }
    );
  },
  getFriendsOfFriends(userId) {
    return models.sequelize.query(
      `
    SELECT DISTINCT users.*
    FROM friends_view f1, friends_view f2
    inner JOIN users on f2.user_id_2 = users.id
    where f1.user_id_1 = :userId
    and f1.user_id_2 = f2.user_id_1
    and f2.user_id_2 <> :userId`,
      {
        model: models.User,
        replacements: {
          userId: userId
        }
      }
    )
  }
};