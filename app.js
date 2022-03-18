const express = require('express');
const app = express();
const configRoutes = require('./routes');
const process = require('process');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configRoutes(app);

const unhandledRejections = new Map();
process.on('unhandledRejection', async (reason, promise) => {
    console.log(reason);
});
process.on('rejectionHandled', (promise) => {
    console.log(reason);
});


app.listen(3000, async () => {
    console.log("Server is started now!");
    console.log('Your routes will be running on http://localhost:3000');
});


