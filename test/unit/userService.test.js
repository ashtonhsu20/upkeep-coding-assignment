const sandbox = require('sinon').createSandbox();
const models = require('../../models');
const userService = require('../../services/userService.js');


describe('UserService', function () {
  afterEach(function () {
    sandbox.restore()
  });

  it('getUsers', function () {
    const findAllStub = sandbox.stub(models.User, 'findAll');

    userService.getUsers(1);

    sandbox.assert.calledOnce(findAllStub);
  })
})