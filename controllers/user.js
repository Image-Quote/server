const User = require('../models/User')
const { encrypt, decrypt } = require('../helpers/encrypt&decrypt')
const { sign, verify } = require('../helpers/jwt')
module.exports = {
    register: function(req,res){
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: encrypt(req.body.email, req.body.password)
        })

        newUser
            .save()
            .then(user =>{
                res.status(200).json({
                    message: "Berhasil Daftar"
                })
            })
            .catch(err =>{
                res.status(401).json(err)
            })
    },
    
    login: function(req,res){
        let email = req.body.email
        User
            .findOne({ email:email })
            .then(user =>{
                console.log(user);
                let hash = user.password
                if(decrypt(user.email, req.body.password, hash)){
                    return sign(user)
                }else{
                    res.status(404).json({
                        message: 'Email Atau Password Salah'
                    })
                }
            })
            .then(token =>{
                res.status(200).json({
                    token: token
                })
            })
            .catch(err =>{
                res.status(500).json(err)
            })
    }
}