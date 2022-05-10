const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const connect = require('./config/db')
const routes = require('./routes/router')

// db connection
connect()

//middlewares
app.use(bodyParser.json())

//routes
app.use(routes)

app.get('/', (req, res)=>{
    res.send('Hello Symstar!')
})
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})