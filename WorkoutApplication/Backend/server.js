const express = require('express')

require('dotenv').config()
const mongoose = require('mongoose')
// express app creation
const app = express()
const workoutRoutes = require('./routes/workout') 
const userRoutes = require('./routes/user') 
// middle ware

app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})
app.use('/api/user',userRoutes)
app.use('/api',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() =>{
    console.log('Database Connected')
    // listen for request
    app.listen(process.env.PORT,() =>{
        console.log('listening on port 4000')
    })
})
.catch((console.error()))



// routes
app.get('/demo',(req,res) =>{
    res.json({mssg: 'Welcome to the App guys'})
})
