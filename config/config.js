var pgp = require('pg-promise');
var db = pgp('postgres://postgres:123@host:5432/elephant-node-express');
module.exports = db;