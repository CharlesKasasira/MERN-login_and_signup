require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3002


try{
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true})
} catch(error) { console.log(error)}




// Middleware
app.use(express.json())

app.get('/', (req, res) => res.send('Hello world!'))

app.get('/login', (req, res) => {
    res.json({
        'result': 'success',
        'message': 'Login successful'
    })
})

app.post('/register', (req, res) => {

    console.log(req.body)
    res.json({
        'result': 'successful',
        'message': 'Register successful'
    })
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