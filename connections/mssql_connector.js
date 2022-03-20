const sql = require('mssql');

console.log(process.env.MSSQL_USER)
const sqlConfig= {
    user: process.env.MSSQL_USER,
    password: process.env.MSSQL_PWD,
    database: process.env.MSSQL_DB,
    server: process.env.MSSQL_HOST,
    trustServerCertificate: true,
};

sql.establish_connect = async () => {
    await sql.connect(sqlConfig, err => {
        if(err){
            console.log("Error "+err.message);
        }else{
            console.log("Db is now connected")
        }
    });
}

sql.on('error', err => {
    console.log("MSSql Error "+err.message);
})

module.exports = sql;