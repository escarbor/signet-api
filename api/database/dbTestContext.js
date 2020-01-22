const config = require('./knexfile')['test'];
const knexTest = require('knex')(config);

module.exports = knexTest;