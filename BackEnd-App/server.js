const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
require('./connection')
var cors = require('cors')
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

app.use(cors())


dotenv.config();



app.use(express.urlencoded({ extended: true }))
app.use(express.json());


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

//crud applications

app.listen(3002, () => {
    console.log('The app is listening to the port: http://localhost:3002');
}) 
