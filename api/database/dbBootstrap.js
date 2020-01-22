const knex = require('./dbContext');
const knexTest = require('./dbTestContext');
const util = require('../utils/utils');

util.startPromiseChain()
.then(() => {
 return dbBootstrap(knex)
})
 .then(() => {
  return dbBootstrap(knexTest)
});

function dbBootstrap(knexContext) {
  return knexContext.migrate.latest()
  .then(function(success) {
    if(success) {
        console.log("Succesfully ran migrations")
        return knexContext.seed.run();
    } else {
        console.log("failed to run migrations")
    }
  }).finally(function() {
    return knexContext.destroy();
  })
}

module.exports = {
  dbBootstrap
}