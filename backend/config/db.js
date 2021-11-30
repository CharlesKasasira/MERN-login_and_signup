const mongoose = require('mongoose')
require('dotenv').config()

function dbConnect() {
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true})
}


module.exports = dbConnect