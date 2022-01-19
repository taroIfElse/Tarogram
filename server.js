const express = require('express')

let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


const router = require('./components/message/network')


app.use('/app', express.static('public'))



app.listen(3000);
console.log('La app esta escuchando en http://localhost:3000')