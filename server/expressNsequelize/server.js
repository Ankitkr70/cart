const express = require('express')
const path = require('path')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.get('/', require('./public/index.html'))
app.use('/api', require('./routes/api').route)
app.use('/', express.static(path.join('./public')))


app.listen(2649, () => console.log('server started at http://localhost:2649'));

