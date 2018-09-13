var bcrypt = require('bcryptjs');

module.exports = {
    encrypt: function(email, password){
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(email+password, salt);
        return hash
    },
    
    decrypt: function(email, password, hash){
        return bcrypt.compareSync(email+password, hash);
    }
}