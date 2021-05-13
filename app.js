const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))


app.get('', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)
    const add = n1 + n2
    res.send('The value is ' + add)
})

app.post('/sub', (req, res) => {
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)
    const sub = n1 - n2
    res.send('The value is ' + sub)
})

app.post('/mul', (req, res) => {
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)
    const mul = n1 * n2
    res.send('The value is ' + mul)
})

app.post('/div', (req, res) => {
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)
    const div = n1 / n2
    res.send('The value is ' + div)
})



app.listen(3000, (res) => {
    console.log("server started at port 3000")
})