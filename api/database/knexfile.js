const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;

module.exports = {

  test: {
    client: 'postgres',
    connection: {
      host: 'db',
      user: user,
      password: password,
      database: 'signettest',
      port: '5432'
    },
    pool: {
      min: 1,
      max: 20,
    },
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    }
  },

  development: {
    client: 'postgres',
    connection: {
      host: 'db',
      user: user,
      password: password,
      database: 'signet',
      port: '5432'
    },
    debug: true,
    pool: {
      min: 1,
      max: 20
    },
    migrations: {
      directory: __dirname + "/migrations"
    },
    seeds: {
      directory: __dirname + "/seeds"
    },
  },
}
