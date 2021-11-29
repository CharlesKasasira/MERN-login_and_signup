const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    createdAt: {
            type: Date,
            default: Date.now
        },
    name: String, 
    username: {
            type: String,
            username: String,
            required: true,
            trim: true,
            unique: 1
        },
    password: {
            type: String,
        }
})

userSchema.statics.getUser = async (username) => {
    const USER = await User.findOne({username: username});
    return {
        id: USER._id,
        createdAt: USER.createdAt,
        username: USER.username
    }
}

const User = mongoose.model('User', userSchema)

module.exports = User;