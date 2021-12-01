const mongoose = require('mongoose')

const responseSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now 
    },
    question_id: {
        type: String,
        required: true 
    },
    student_id: {
        type: String,
        required: true 
    },
    status: {
        type: String
    },
    duration: {

    },
    score: {
        type: String
    },
    review: {
        type: String
    },
    remarks: {
        type: String
    },
    rating: {
        
    }
})