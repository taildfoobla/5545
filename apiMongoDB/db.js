const Pool = require("pg").Pool;

const pool = new Pool({
    user:"u5545",
    host:"192.168.0.249",
    database:"pj5545",
    password:"MoonFit5545",
    port:5432,
})

module.exports= pool