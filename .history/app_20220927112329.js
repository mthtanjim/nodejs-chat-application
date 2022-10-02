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
.then(() => console.log("database connection successful!"))
.catch(err => console.log(err))

//request parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//set view engine setup
app.set("view engine", "ejs")

//set static folder
app.use