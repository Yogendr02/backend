const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

mongoose.connect(process.env.DATABASE).then(con=>{
    console.log("connected")
})
//id,name,rs,lnk,img
const tourschema = new mongoose.Schema({
    id:{type:Number,unique:true},
    name:{type:String,unique:true},
    rs:{type:Number,unique:true},
    lnk:{type:String,unique:true},
    img:{type:String,unique:true}
})

const Tour = mongoose.model('tour',tourschema)

module.exports = Tour
//ieufgrwi