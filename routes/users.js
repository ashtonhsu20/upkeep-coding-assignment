var models = require('../models');
var express = require('express');
var router = express.Router();
var sequelize = require('sequelize');

router.get("/", function (req, res) {
  let options = {};
  if (req.query.limit) {
    options.limit = parseInt(req.query.limit);
  }
  if (req.query.offset) {
    options.offset = parseInt(req.query.offset);
  }

  models.User.findAll(options).then(function (users) {
    res.json({
      success: true,
      users: users
    });
  });
});


router.get("/:userId/friends", function (req, res) {
  models.sequelize.query(
    `
    SELECT users.*
    FROM users
    inner JOIN friends_view on user_id_2 = users.id
    where friends_view.user_id_1 = :userId`,
    {
      model: models.User,
      replacements: {
        userId: req.params.userId
      }
    }).then(function (users) {
    res.json({
      success: true,
      users: users
    });
  });
});

router.get("/:userId/friends_of_friends", function (req, res) {
  models.sequelize.query(
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
        userId: req.params.userId
      }
    }).then(function (users) {
    res.json({
      success: true,
      users: users
    });
  });
});


module.exports = router;
