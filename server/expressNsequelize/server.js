const express = require('express')
const path = require('path')

const app = express();

app.use(express.json)
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join('./public')))
app.use('/api', require('./routes/api/index.js').route)

app.listen(2649, () => console.log('server started at http://localhost:2649'));

