const express = require("express")
const app = express()
const Tour = require('./data')
const fs = require('fs')
const port = process.env.PORT || 3000
const cors = require('cors')
app.use(cors())
app.get('/',(req,res)=>{
    res.json({msg:"hello ji"})
})

const tourdata = JSON.parse(fs.readFileSync('db.json','utf-8'))

const apo = async ()=>{
    try{
    await Tour.create(tourdata).then(console.log("done"))}
    catch(err){console.log('its ok')}
}

apo()

const pro = async()=>{
    const pilm = await Tour.find()
    app.get('/api',(req,res)=>{
        res.json(pilm)
    })
}
pro()

if(process.env.NODE_ENV == 'production'){
    app.use(express.static("tourism/build"))
}

app.listen(port,()=>{
    console.log("now started")
})