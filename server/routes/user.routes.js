const controller = require('../controllers/user.controllers');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  //register new user
  app.post('/api/register', controller.register);
  //login registered user
  app.post('/api/login', controller.login);
  //get users
  app.get('/api/users', authenticate, controller.allUsers);
}