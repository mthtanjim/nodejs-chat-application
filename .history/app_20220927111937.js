const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const app = expres()
dotenv.config()

//database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then