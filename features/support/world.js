var World = function World(callback) {
  this.db = require('../../db');
  this.app = require('../../app');
  callback();
};
exports.World = World;