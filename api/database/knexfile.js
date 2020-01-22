// Update with your config settings.

module.exports = {

  test: {
    client: 'postgres',
    connection: {
      host: 'db',
      user: $POSTGRES_USER,
      password: $POSTGRES_PASSWORD,
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
      user: $POSTGRES_USER,
      password: $POSTGRES_PASSWORD,
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
