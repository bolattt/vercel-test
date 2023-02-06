const pgp = require("pg-promise")();

const DATABASE_URL = process.env.DATABASE_URL;

const db = pgp({ connectionString: DATABASE_URL });

module.exports = db;
