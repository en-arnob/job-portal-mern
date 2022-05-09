const express = require('express')
const app = express()
const routes = require('./routes/router')

app.use(routes)

app.get('/', (req, res)=>{
    res.send('Hello Symstar!')
})

app.listen(8000, () => {
    console.log('Server running on port: 8000')
})