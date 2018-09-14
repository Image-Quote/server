'use strict'

const translate = require('google-translate-api');

function GoogleTranslate(input) {
    return new Promise(function(resolve,reject){
        translate(input, {to: 'id'})
            .then(res => {
                console.log(res.text)
                // return res.text
                resolve(res.text)
            }).catch(err => {
                // console.log('ERROR ',err)
                // return err
                reject(err)
            });    
    })
}

// testing
// GoogleTranslate('What do you think about this my friend')

module.exports = GoogleTranslate

