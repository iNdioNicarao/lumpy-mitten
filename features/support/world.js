var World = function World(callback) {
  this.db = require('../../db')
  callback();
};
exports.World = World;