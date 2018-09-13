const router = require('express').Router();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const { singleUpload } = require('../controllers/upload');
const images = require('../helpers/images')

router.get('/', (req, res) => {
  res.send('ready upload')
})
router.post('/', 
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    console.log('upload===================>');
    
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  }
);

module.exports = router;