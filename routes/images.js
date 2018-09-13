var express = require('express');
var router = express.Router();
var {uploadImage, getAllImage} = require('../controllers/images')

/* GET users listing. */
router.get('/', getAllImage)
router.post('/', uploadImage)

module.exports = router;
