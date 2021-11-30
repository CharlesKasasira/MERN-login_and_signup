const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    question: {
        type: String,
        required: true
    },
    type: {
        type: Array
    },
    category: {
        type: String
    }
})


const Question = mongoose.model('Question', questionSchema)

module.exports = Question