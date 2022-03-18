const express = require('express');
const app = express();
const configRoutes = require('./routes');
const process = require('process');
const sql = require('mssql')
// const dataObj = require('./data')

// app.use(session({
//     name: 'AuthCookie',
//     secret: '%rt8322f8AAAi5n-sdkjhfrtyyyyyyy',
//     resave: false,
//     saveUninitialized: true
// }));

// app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.set('views', path.join(__dirname, 'views'));

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

configRoutes(app);

const unhandledRejections = new Map();
process.on('unhandledRejection', async (reason, promise) => {
    console.log(reason);
});
process.on('rejectionHandled', (promise) => {
    console.log(reason);
});



const sqlConfig = {
    user: 'ihd_db_admin', //process.env.DB_USER,
    password: 'Admin@IHD1!', //process.env.DB_PWD,
    database: 'IHD', //process.env.DB_NAME,
    server: 'DESKTOP-P0VD5MJ',
    trustServerCertificate: true,
}




app.listen(3000, async () => {
   // async () => {
        try {
         // make sure that any items are correctly URL encoded in the connection string
         await sql.connect(sqlConfig)
         const result = await sql.query`SELECT * FROM IHD.DBO.VISITS`
         console.log(result)
        } catch (err) {
            console.log(err)
         // ... error checks
        }
//}
    console.log("Server is started now!");
    console.log('Your routes will be running on http://localhost:3000');
});


