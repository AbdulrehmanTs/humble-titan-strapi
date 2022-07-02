const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});

// const parse = require('pg-connection-string').parse;
// const config = parse(process.env.DATABASE_URL);

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: {
//         rejectUnauthorized: false
//       },
//     },
//     acquireConnectionTimeout: 100000,
//     pool: {
//       min: 0,
//       max: 10,
//       idleTimeoutMillis: 30000000,
//       createTimeoutMillis: 30000000,
//       acquireTimeoutMillis: 30000000,
//       propagateCreateError: false,
//     },
//     debug: false,
//   },
// });