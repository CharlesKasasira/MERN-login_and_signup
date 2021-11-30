const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Question = mongoose.model('Question', questionSchema)

module.exports = Question