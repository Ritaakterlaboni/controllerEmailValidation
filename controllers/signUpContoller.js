const express = require ('express')
const userSchema = require('../model/userSchema');
const emailValidation = require('../helpers/emailValidation');
const router = express.Router()



async function signUpController(req, res){
    // console.log("signupcontroller paisi")
    const {firstname, lastname, email, password} = req.body
      if(!firstname || !lastname){
       return res.send("required name");
    }
    if(!email){
       return res.send("required email");
    }
    if(!password){
        return res.send("required password");
     }
     if(!emailValidation(email)){
        return res.send("no validation");
     }
     const existingEmail = await userSchema.find({email})
    // console.log(existingEmail.length);
    if(existingEmail.length > 0){
        res.send("ache akta email")
    }

    const controller = userSchema({
        firstname,
        lastname,
        email,
        password,
    })
    controller.save();
    res.send("done!");
}

module.exports = signUpController



//bar bar res.send dawya te error ase tai return age disi
 