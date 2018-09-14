require('dotenv').config()
const vision = require('@google-cloud/vision')
const client = new vision.ImageAnnotatorClient()
const translate = require('../helpers/GoogleTranslate')

const textDetect = function (imgUrl) {
    return new Promise(function (resolve, reject) {
        let temp
        client
            .textDetection(imgUrl)
            .then(results => {
                const detections = results[0].textAnnotations;
                let text = results[0].fullTextAnnotation.text
                temp = results
                return translate(text)
                console.log('Text:');
                detections.forEach(text => console.log(text));
                // resolve({text: text, translate: translate})
            })
            .then(translated =>{
                let text = temp[0].fullTextAnnotation.text
                resolve({text: text, translate: translated})
            })
            .catch(err => {
                reject("Unable detect text")
                console.error('ERROR:', err);
            });
    })
}

module.exports = {textDetect}