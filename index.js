const express = require("express")                                    //imported express 
const mongoose = require("mongoose")                                  //import mongoose 
const cors = require("cors")                                          //import cors"allows servers to specify which domains can request resources from browsers"
const bodyParser = require("body-parser")                             //used to parse the body of an incoming HTTP request in a middleware
require("dotenv").config()                                            //loads the environment variables defined in the . env file into process
const taskRoutes = require("./routes/tasks")                          //imported module of tasks.js from routes folder
const methodOverride = require("method-override");

const app = express();                                                // app object is the instance of an Express application
app.use(cors())

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))                         //allows to choose between parsing the URL-encoded data with the querystring library (when false ) or the qs library (when true )
app.set("view engine", "ejs")
app.use('/static', express.static('public'));
app.use("/", taskRoutes);                                             //this is the middleware , executes after the server receives the request and before response
app.use(methodOverride('_method'));

//connection to the mongodb
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to mongodb"))
    .catch((error) => console.error("mongo connection error", error))


const PORT = process.env.PORT || 5000                                      //defining the port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);             //message to display when the port running sucessful
});