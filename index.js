const express = require('express')
const app = express()
const PORT = 4000
 

app.listen (PORT, ()=>{
  console.log(`API Listening on PORT ${PORT}`)
})


app.get('/',(req,res)=>{
    res.sendStatus('This is my API running....')
})


app.get('/about',(res,req) =>{
    res.sent('This is my about route')
})

module.exports = app