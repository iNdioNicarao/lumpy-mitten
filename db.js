var pg = require('pg');

var client = new pg.Client(process.env.DATABASE_URL || 'postgres://test:test@localhost/lumpy-mitten');

client.connect();

module.exports = client;