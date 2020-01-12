'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        first_name: 'Alice',
        last_name: 'Aardvark',
      }, {
        first_name: 'Bob',
        last_name: 'Bear',
      }, {
        first_name: 'Caesar',
        last_name: 'Crow',
      }, {
        first_name: 'Dean',
        last_name: 'Dog',
      },{
        first_name: 'Fred',
        last_name: 'Frog',
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {'truncate':true});
  }
};
