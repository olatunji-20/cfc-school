const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "ola",
    database: "cfc",
    port: 5432
});

module.exports = pool;