const knex = require('../database/dbContext');
const fs = require('fs');

class Util {
    static startPromiseChain() {
        return new Promise((resolve) => { resolve(null); });
    }

    static areMigrationsFinished() {
        return knex.migrate.list()
        .then(data => {
            if(data && data.length > 0){
                const migrationsDirPath = __basedir + "/database/migrations/";
                const lastMigration = data[0][data[0].length -1];
                const migrationFileName = migrationsDirPath + lastMigration;
                console.log("HEY!", data);
                return new Promise((resolve, reject) => {
                    fs.access(migrationFileName, error => {
                        var result = !error ? true: false;
                        resolve(result);
                    });    
                });
            }else 
                console.log("No migrations found!");
                return false;
        })
        .catch(err => {
            console.log(err, "Error in migration status check.");
        })
    }
}

module.exports = Util;