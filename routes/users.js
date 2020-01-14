var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController.js');

router.get("/", userController.getUsers);

router.get("/:userId/friends", userController.getFriends);

router.get("/:userId/friends_of_friends", userController.getFriendsOfFriends);

module.exports = router;
