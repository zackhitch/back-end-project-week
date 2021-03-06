const { authenticate } = require('../Utils/middleware');
const userCreate = require('../Controllers/userCreate');
const userLogin = require('../Controllers/userLogin');
const noteAdd = require('../Controllers/noteAdd');
const noteDelete = require('../Controllers/noteDelete');
const noteEdit = require('../Controllers/noteEdit');
const noteGet = require('../Controllers/noteGet');
const noteGetOne = require('../Controllers/noteGetOne');

module.exports = server => {
  server.get('/api/notes/:id', authenticate, noteGet);
  server.get('/api/note/:id', authenticate, noteGetOne);
  server.route('/api/notes').post(authenticate, noteAdd);
  server.route('/api/notes/:id').delete(authenticate, noteDelete);
  server.route('/api/notes/:id').put(authenticate, noteEdit);
  server.route('/api/login').post(userLogin);
  server.route('/api/signup').post(userCreate);
};
