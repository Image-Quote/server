require('dotenv').config()
const vision = require('@google-cloud/vision')
const client = new vision.ImageAnnotatorClient()

const textDetect = function (imgUrl) {
    return new Promise(function (resolve, reject) {
        client
            .textDetection(imgUrl)
            .then(results => {
                const detections = results[0].textAnnotations;
                let text = results[0].fullTextAnnotation.text
                console.log('Text:');
                detections.forEach(text => console.log(text));
                resolve({text: text})
            })
            .catch(err => {
                reject("Unable detect text")
                console.error('ERROR:', err);
            });
    })
}