const knex = require('./dbContext');
const knexCleaner = require('knex-cleaner');

function testSetup() {
    return knexCleaner.clean(knex)
   .then(function() {
    return knex.seed.run();
   }).catch((err) => {
       console.log("test setup error: ", err)
   });
}

function truncateTable(tableName) {
    return knex(tableName).del();
}

function testCleanUp() {
    return knex.destroy();
}

module.exports = {
    testSetup,
    testCleanUp,
    truncateTable
}