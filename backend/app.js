require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3002
const User = require('./models/user')


try{
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true})
} catch(error) { console.log(error)}




// Middleware
app.use(express.json())

app.get('/', async (req, res) => {
    const user = await User.find()
    res.json({
        user
    })
})


app.get('/users/username/:username', async (req, res) => {
    const user = await User.getUser(req.params.username)
    if(user){
        return res.json({
            'result': 'success',
            'user-details': user
        })
    }
    return res.json({
        'result': 'failed',
        'message': 'Login Failed'
    })
})


app.post('/login', (req, res) => {
    
})

app.post('/register', async (req, res) => {

    const { username, password } = req.body

    const user = await new User({ username, password })

    user.save() 
    try{

        if(user){
            return res.json({
                "result": "successful",
                "message": "New User Registered",
                "user-details": user
            })
        }

        return res.json({
            "result": "failed",
            "message": "Registration failed"
        })
        
    } catch(error){
            if(error.E11000){
                res.json({
                    "error": "user exists"
                })
            }      
    }

    
})


app.delete('/users/:id', (req, res) =>{
    const {id} = req.params
    console.log(req.params.id)
    res.send(`Deleted ${id}`)
})


app.put('/users', (req, res) => {
    console.log(req.body)
    res.send("Updated User")
})

app.patch('/users/:id', (req, res) => {
    const { id } = req.params

    let user = {
        "id": 12,
        "username": "Charles",
        "password": "1234",
        "email": "charleskasasira01@gmail.com"
    }

    console.log('Old user', user)

    const { username } = req.body
    

    if(user.id == id) {
        user.username = username
        res.json({
            "message": "updated successfully",
            "updated user": user
        })
    }

})



app.listen(PORT, ()=> console.log(`API working on http://localhost:${PORT}`));