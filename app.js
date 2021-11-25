const app = (require('express'))()
const PORT = 3002

app.get('/', (req, res) => res.send('Hello world!'))

app.get('/login', (req, res) => {
    res.json({
        'result': 'success',
        'message': 'Login successful'
    })
})



app.listen(PORT, ()=> console.log(`Api working on http://localhost:${PORT}`));