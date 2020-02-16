const environment = process.env.NODE_ENV;
const knex = require('./dbContext');

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
  });
}

if(environment == 'staging' || environment == 'production') {
    return dbBootstrap(knex);
}else {
    console.log("Wrong environment! Migration task failed");
}

