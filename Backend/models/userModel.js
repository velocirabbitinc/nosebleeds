const { Pool } = require('pg');

const PG_URI = 'postgres://imqhtpit:g1YckUCgfBEIVBcWgrnKlwzK5YQlH4wO@kashin.db.elephantsql.com/imqhtpit';
const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed  the query', text);
    return pool.query(text, params, callback);
  }
};