const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "8090",
    host: "localhost",
    port: "5432",
    database: "react_todo"

});

module.exports = pool;