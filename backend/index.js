const express = require('express')
const app = express()
const port = 5000 || process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://cluster:cluster1234@cluster0.21nz6.mongodb.net/mydb?retryWrites=true&w=majority')


app.use(cors())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.use((_req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');
 })
 
app.use('/',require('./routes/user.routes'))

app.listen(port,()=>{
    console.log('Running'+port)
})