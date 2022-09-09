require ('dotenv').config()
const express =  require('express')
const mongoose = require('mongoose')

const workoutRoutes = require('./routes/workoutlog')
//express app
const app = express()
//routes


//middleware
app.use(express.json()); //needed to get body data tp req incase of post or patch


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


app.use('/api/workouts', workoutRoutes)
// listen

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{

        app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})


// mongodb+srv://samroadie:<password>@cluster0.ubpey04.mongodb.net/?retryWrites=true&w=majority