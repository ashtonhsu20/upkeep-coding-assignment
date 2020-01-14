var userService = require('../services/userService.js');

// exports.UserService = UserService;
module.exports = {
  getUsers: function (req, res) {
    let options = {};
    if (req.query.limit) {
      options.limit = parseInt(req.query.limit);
    }
    if (req.query.offset) {
      options.offset = parseInt(req.query.offset);
    }

    userService.getUsers(options).then(function (users) {
      res.json({
        success: true,
        users: users
      });
    })
  },
  getFriends: function (req, res) {
    userService.getFriends(req.params.userId).then(function (users) {
      res.json({
        success: true,
        users: users
      });
    });
  },
  getFriendsOfFriends: function (req, res) {
    userService.getFriendsOfFriends(req.params.userId).then(function (users) {
      res.json({
        success: true,
        users: users
      });
    });
  }
};