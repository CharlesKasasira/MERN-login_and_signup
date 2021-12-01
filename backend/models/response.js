const mongoose = require('mongoose')

const responseSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now 
    }
})