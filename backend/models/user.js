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

userSchema.statics.getUserById = async(id) => {
    const USER = await userSchema.findById(id)
    return {
        id: USER._id,
        createdAt: USER.createdAt,
        username: USER.username
    }
}


userSchema.statics.getUsersByTerm = async(term = null) => {
    let users = await userSchema.find({name: term})
    if(users?.length > 0){
        users.map(user => ({
            id: user._id,
            createdAt: user.createdAt,
            username: user.username
        }))
        return users
    }

    users = await User.find({ email: term})
    if(users?.length > 0){
        users.map(user => ({
            id: user._id,
            createdAt: user.createdAt,
            username: user.username
        }))
        return users
    }

    users = await User.find({ username: term})
    if(users?.length > 0){
        users.map(user => ({
            id: user._id,
            createdAt: user.createdAt,
            username: user.username
        }))
        return users
    }

    users = await User.find({phone: term})
    if(users?.length  > 0){
        users.map(user => ({
            id: user._id,
            createdAt: user.createdAt,
            username: user.username
        }))
        return users;
    }

    return null
}




const User = mongoose.model('User', userSchema)

module.exports = User;