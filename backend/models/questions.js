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
    },
    author: {
        type: String
    },
    score: {
        type: Number
    },
    platform: {
        type: String
    },
    answer: {
        type: Object
    },
    choice: {

    },
    timeLimit: {
        
    },
    expiresAt: {
        type: String
    },
    required: {

    }
})


const Question = mongoose.model('Question', questionSchema)

module.exports = Question