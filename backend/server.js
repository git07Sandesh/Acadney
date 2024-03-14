require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet');

const blogspotRoutes = require('./routes/blogspot')

//express app 
const app = express()

app.use(express.json({ limit: '50mb' })) // Increase the limit as needed // parse incoming requests with JSON 
app.use(helmet()); 
   
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
//routes
app.use('/api/blogspots', blogspotRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listening for request still the same port number but instead of directly
// using value, it uses variable. The variables are in .env file.
// While pushing the project in github, place .env file in git ignore.

        app.listen(process.env.PORT, () =>{
            console.log('connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })





