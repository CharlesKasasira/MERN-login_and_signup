const express = require('express')
const app = express()
const PORT = 3002



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



app.listen(PORT, ()=> console.log(`Api working on http://localhost:${PORT}`));