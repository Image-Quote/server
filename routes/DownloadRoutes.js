'use strict'

const express = require('express');
const router = express.Router();
const DownloadController = require('../controllers/DownloadController');

router.post('/',(req,res)=>{
    DownloadController.downloadFile(req,res);
})

module.exports = router