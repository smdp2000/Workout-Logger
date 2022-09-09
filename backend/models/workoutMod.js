const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    },  
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '1440m' },
      }
 
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)

