var express = require('express');
var router = express.Router();
var userService = require('../services/userService.js');

router.get("/", function (req, res) {
  let options = {};
  if (req.query.limit) {
    options.limit = parseInt(req.query.limit);
  }
  if (req.query.offset) {
    options.offset = parseInt(req.query.offset);
  }

  userService.findAll(options).then(function (users) {
    res.json({
      success: true,
      users: users
    });
  });
});


router.get("/:userId/friends", function (req, res) {
  userService.getFriends(req.params.userId).then(function (users) {
    res.json({
      success: true,
      users: users
    });
  });
});

router.get("/:userId/friends_of_friends", function (req, res) {
  userService.getFriendsOfFriends(req.params.userId).then(function (users) {
    res.json({
      success: true,
      users: users
    });
  });
});


module.exports = router;
