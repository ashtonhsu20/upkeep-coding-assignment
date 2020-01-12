'use strict';

var app = require('../../app');
var expect = require('expect.js');
var request = require('supertest');
// var sequelize = require("sequelize");


describe('user list api', function () {
  before(function () {
      return require('../../models').sequelize.sync();
  });

  beforeEach(function () {
    this.models = require('../../models');

    let sequelize = this.models.sequelize;
    return sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
      .then(function() {
        return sequelize.query('Truncate table users')

      })
      .then(function() {
        return sequelize.query('SET FOREIGN_KEY_CHECKS = 1')

      });
  });

  it('lists users', function (done) {
    this.models.User.create(
      {
        first_name: 'first',
        last_name: 'last',
      }
    ).then(function () {
      request(app).get('/api/v1/users').expect({
        success: true,
        users: [
          {
            id:1,
            first_name: 'first',
            last_name: 'last'
          }
        ]
      },done);
    })
  });

  it('lists users with Pagination', function (done) {
    this.models.User.bulkCreate([
      {
        first_name: 'first_1',
        last_name: 'last_1',
      },
      {
        first_name: 'first_2',
        last_name: 'last_2',
      },
      {
        first_name: 'first_3',
        last_name: 'last_3',
      }]
    ).then(function () {
      request(app).get('/api/v1/users?limit=2&offset=1').expect({
        success: true,
        users: [
          {
            id:2,
            first_name: 'first_2',
            last_name: 'last_2'
          },
          {
            id:3,
            first_name: 'first_3',
            last_name: 'last_3'
          }
        ]
      },done);
    })
  });
});
