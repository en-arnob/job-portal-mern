const express = require('express')
const app = express()
require('dotenv').config()
const connect = require('./config/db')
const routes = require('./routes/router')

// db connection
connect()

app.use(routes)



app.get('/', (req, res)=>{
    res.send('Hello Symstar!')
})
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})