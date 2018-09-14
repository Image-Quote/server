const mongoose = require('mongoose')
const Schema = mongoose.Schema

var imageSchema = new Schema({
    user:{
        ref:'User',
        type:Schema.Types.ObjectId
    },
    url:String,
    text:String,
    translate:String,
    countImage:Number
})

var image = mongoose.model('Image', imageSchema)

module.exports = image