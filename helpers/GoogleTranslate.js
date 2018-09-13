'use strict'

const translate = require('google-translate-api');

function GoogleTranslate(input) {
    translate(input, {to: 'id'})
        .then(res => {
            console.log(res.text)
            return res.text
        }).catch(err => {
            // console.log('ERROR ',err)
            return err
        });    
}

// testing
// GoogleTranslate('What do you think about this my friend')

module.exports = GoogleTranslate

