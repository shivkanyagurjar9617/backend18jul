const express = require('express')
const { mw1 } = require('./middilWare/middilare')


const app = express()
require('dotenv').config()

app.post('/query/:mono',mw1,(req,res)=>{
    console.log(req.query)
    let mono = req.params.mono
    console.log(req.params.mono)
    res.json({
                "msg":"hello everyone",
                name:req.query.name,
                surname:req.query.surname,
                mono 
    })
})


const PORTNO = process.env.PORTNO

app.listen(PORTNO,()=>{
    console.log('this is a port number is '+PORTNO)
})