var express = require('express');
var router = express.Router();
var images = require('../helpers/images')
var multer = require('multer')
var {uploadImage, getAllImage} = require('../controllers/images')

/* GET users listing. */
router.get('/', getAllImage)
router.post('/',images.multer.single('image'),images.sendUploadToGCS,uploadImage)

module.exports = router;
