const sql = require('mssql');

sql.establish_connect = async () => {
    let sqlConfig= {
            user: process.env.MSSQL_USER,
            password: process.env.MSSQL_PWD,
            database: process.env.IHD,
            server: process.env.DESKTOP-P0VD5MJ,
            trustServerCertificate: true,
        };
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