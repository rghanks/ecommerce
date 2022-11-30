const app = require('./app');
const dotenv = require('dotenv');

// config 
dotenv.config({path : "backend/config/config.env"})

const connectDatabase = require('./config/database')

// Handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error : ${err.message}`);
    console.log("Shutting down the server due to  uncaught exception");
    process.exit(1);
})


connectDatabase();



const server = app.listen(process.env.PORT, ()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`);
})


// Unhadled Promose Rejection
process.on("unhandledRejection",error=>{
    console.log(`error: ${error.message}`);
    console.log("Shutting down the server due to unhadled promose rejection");
    server.close(()=>{
        process.exit(1);
    });
})