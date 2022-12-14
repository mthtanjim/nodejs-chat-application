//external imports
const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const path = require("path")
const cookieParser = require("cookie-parser")

//internal emports
const {notFoundHandler, errorHandler} = require("./middilewares/common/errorHandler")

const app = express()
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
app.use(express.static(path.join(__dirname, "public")))

//parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET))

//routing setup

//404 not found handler
app.use(notFoundHandler)

//common error handler
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`App listening to port ${process.env.PORT}`)
})

