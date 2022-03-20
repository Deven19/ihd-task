require('dotenv').config();
let sql = require('./connections/mssql_connector')
const express = require('express');
const app = express();
const configRoutes = require('./routes');
const process = require('process');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configRoutes(app);

process.on('unhandledRejection', async (reason, promise) => {
    console.log(reason);
});
process.on('rejectionHandled', async (reason, promise) => {
    console.log(reason);
});


  app.listen(process.env.PORT, async () => {
    console.log("Server is started now!");
    console.log(`Your routes will be running on http://localhost:${process.env.PORT}`);
    sql.establish_connect(error => {
        if(!error){
            
        }else{
            console.log(error);
        }
      });
    
    });