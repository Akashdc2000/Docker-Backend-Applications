const Pool = require('pg').Pool

const conn = new Pool({
    user: process.env.UNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.PORT,
    // database: "EMP_ManagementDB"
})

module.exports=conn;