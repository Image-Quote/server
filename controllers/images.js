const Image = require('../models/images')
// const User = require('../models/users')
// const jwt = require('jsonwebtoken')
require('dotenv').config()
const { textDetect } = require('../helpers/vision')

const uploadImage = function (req, res) {
    
    textDetect(req.file.cloudStoragePublicUrl)
        .then(text => {
            Image.create({
                url:req.file.cloudStoragePublicUrl,
                text:text.text,
                translate: text.translate
            })
            .then(function(result){
                // console.log(result);
                res.status(200).json({
                    message:"image successfully saved to database",
                    data:result
                })
            })
            .catch(function(err){
                res.status(400).json({
                    message:"error save image to database",
                    erro:err.message
                })
            })
        })
        .catch(err =>{
            res.status(500).json({error: err.message})
        })
}

const getAllImage = function (req, res) {
    Image.find({})
    .then(function(image){
        res.status(200).json({
            message:"successfully get image",
            data:image
        })
    })
    .catch(function(err){
        res.status(400).json({
            message:"error getting image",
            error:err.message
        })
    })
}


module.exports = { uploadImage, getAllImage }