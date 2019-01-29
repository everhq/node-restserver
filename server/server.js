require('./config/config')

const express = require('express')
const app = express()

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', function(req, res) {
    res.json('get usuario')
})

app.post('/usuario', function(req, res) {

    let body = req.body

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'el nombre es necesario'
        })
    } else {

        res.json({
            body
        })
    }
})

app.put('/usuario/:id', function(req, res) {
    let id1 = req.params.id;

    res.json({
        id: id1
    })
})

app.delete('/usuario', function(req, res) {
    res.json('delete usuario')
})

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto', process.env.PORT);
})