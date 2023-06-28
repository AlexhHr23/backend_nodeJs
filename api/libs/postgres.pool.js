const { Pool } = require('pg');

  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'alex',
    password: 'alex232415',
    database: 'my_store'
  });

module.exports = pool;
