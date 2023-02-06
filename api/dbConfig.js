const pgp = require("pg-promise")();
require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;

const db = pgp({
  connectionString: DATABASE_URL,
  max: 30,
});

module.exports = db;
