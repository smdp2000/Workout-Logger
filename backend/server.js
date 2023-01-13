require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
// EXPRESS APP
const app = express()

// MIDDLEWARE
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// ROUTES
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// CONNECT TO DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // LISTEN FOR REQUESTS
    app.listen(process.env.PORT, () => {
      console.log('Connected to db & listening on port http://localhost:4000')
    })
  })
  .catch((error) => {
    console.log(error)
  })
