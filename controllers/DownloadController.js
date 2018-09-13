'use strict'

const download = require('download-file');

class DownloadController {

    static downloadFile(req,res){

        let url = req.body.url

        const options = {
            directory : '../downloadTest'
        }

        download(url,options,(err)=>{
            if(!err){
                res.status(200).json({ msg : "Download success"})
                // console.log('Okey')
            }else{
                // console.log('ERROR-->',err)
                res.status(500).json({ msg : 'ERROR ',err})
            }
        })
    }

}

module.exports = DownloadController