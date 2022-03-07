const _Port = 8081

const server  = require('./web/index')
const log     = require('morgan')
const express = require('express')
const app     = express()

app.use(log('dev'))
app.use('/', server)

app.listen(process.env.PORT || _Port,()=>{
    console.log(`Online into port: ${_Port}`)
})


