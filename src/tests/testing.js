process.env.PG_DATABASE = 'FatTracker';
global.request = require('supertest');
global.assert = require('assert');

require('./before');

describe('Auth Tests', function () {
  require('./user/auth/authException');   //+
  require('./user/auth/authSuccess');  // +
});

