var World = function World(callback) {
  this.db = require('../../db');
  this.app = require('../../app');
  var port = process.env.PORT || 3000;
  this.baseUrl = 'http://localhost:' + port;
  callback();
};
exports.World = World;