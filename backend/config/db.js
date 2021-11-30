const mongoose = require('mongoose')
require('dotenv').config()

function dbConnect() {
    mongoose.connect(process.env.MONGODB, { userNewUrlParser: true})
}


module.exports = dbConnect