const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers");
const connectDatabase = require("./helpers/database/connectDatabase");
const connectionDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");

// Environment Variables
dotenv.config({
    path : "./config/env/config.env"
});


const app = express();
const PORT = process.env.PORT;
connectionDatabase();
// Router Middleware
app.use("/api",routers);

//Error Handler Middleware
app.use(customErrorHandler);

app.listen(PORT,() => {
    console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
});
